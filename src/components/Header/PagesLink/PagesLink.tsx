import { Link } from 'react-router-dom';
import withRouter from '../../../hoc/withRouter/withRouter';
import ROUTES from '../../../router/routes';
import { PagesLinkProps } from './PagesLink.interface';
import styles from './PagesLink.module.scss';

const PagesLink = ({ location }: PagesLinkProps) => {
  const links = {
    [ROUTES.ROOT as string]: {
      link: ROUTES.GRAPHIQL,
      title: 'GraphiQL',
    },
    [ROUTES.GRAPHIQL as string]: {
      link: ROUTES.ROOT,
      title: 'Welcome page',
    },
  };

  let currentRoute = location.pathname.replace('/', '');
  if (!currentRoute) {
    currentRoute = ROUTES.ROOT;
  }
  const path = links?.[currentRoute].link || ROUTES.GRAPHIQL;
  const title = links?.[currentRoute].title || 'GraphiQL';

  return (
    <Link className={styles.pages_link} to={path}>
      {title}
    </Link>
  );
};

export default withRouter(PagesLink);
