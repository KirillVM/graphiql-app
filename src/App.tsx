import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext/AuthContext';
import './App.scss';

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
