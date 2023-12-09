import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'src/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
