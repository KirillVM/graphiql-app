import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext/AuthContext';
import { LocalizationProvider } from './context/LocalizationContext/LocalizationContext';
import styles from './App.module.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <LocalizationProvider>
        <AuthProvider>
          <div className={styles.app}>
            <Header />
            <main className={styles.main}>
              <Outlet />
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  );
};

export default App;
