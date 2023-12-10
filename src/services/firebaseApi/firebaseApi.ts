import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
  Auth,
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
  auth: Auth,
  email: string,
  password: string
): Promise<void> => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      signInUser(auth, email, password);
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'EMAIL-EXIST':
          console.log('User with this email already exist');
      }
    });
};

// Sign in
export const signInUser = async (
  auth: Auth,
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
      console.log(errorMessage);
      switch (errorMessage) {
        case 'INVALID_LOGIN_CREDENTIALS':
          console.log(`User with these credentials doesn't exist`);
      }
    });
};

// Sign in with token
export const signInWithToken = async (
  auth: Auth,
  token: string
): Promise<void> => {
  signInWithCustomToken(auth, token)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      switch (errorMessage) {
        case 'INVALID_CUSTOM_TOKEN':
          console.log('The supplied token is not a Firebase custom token.');
      }
    });
};

// Sign out with token
export const signOutUser = async (auth: Auth): Promise<void> => {
  signOut(auth)
    .then(() => {
      console.log('User succesfuly signed out');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
