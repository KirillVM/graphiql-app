import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext/AuthContext';
import styles from './App.module.scss';

const App = () => {
  return (
    <AuthProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
