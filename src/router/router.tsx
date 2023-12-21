import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ROUTES from './routes';
import App from '../App';
import WelcomePage from '../pages/Welcome/Welcome';
import NotFoundPage from '../pages/NotFound/NotFound';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Graphiql from '../pages/Graphiql/Graphiql';
import RequireAuth from '../hoc/RequireAuth/RequireAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<App />}>
      <Route index element={<WelcomePage />} />
      <Route
        path={ROUTES.GRAPHIQL}
        element={
          <RequireAuth>
            <Graphiql />
          </RequireAuth>
        }
      />
      <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      {<Route path="/*" element={<Navigate to="404" replace />} />}
    </Route>
  )
);

export default router;
