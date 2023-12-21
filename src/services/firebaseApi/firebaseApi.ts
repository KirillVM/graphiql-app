import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Sign up
export const createUser = async (
  email: string,
  password: string
): Promise<void> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      signInUser(email, password);
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'EMAIL-EXIST':
          console.error('User with this email already exist');
      }
    });
};

// Sign in
export const signInUser = async (
  email: string,
  password: string
): Promise<void> => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userCredential.user.getIdToken().then((refreshToken) => {
        localStorage.setItem('refreshToken', refreshToken);
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
      switch (errorMessage) {
        case 'INVALID_LOGIN_CREDENTIALS':
          console.error(`User with these credentials doesn't exist`);
      }
    });
};

// Sign in with token
export const signInWithToken = async (token: string): Promise<void> => {
  signInWithCustomToken(auth, token)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'INVALID_CUSTOM_TOKEN':
          console.error('The supplied token is not a Firebase custom token.');
      }
    });
};

// Sign out with token
export const signOutUser = async (): Promise<void> => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('refreshToken');
      console.log('User succesfuly signed out');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });
};
