import { Link } from 'react-router-dom';
import withRouter from '../../../hoc/withRouter/withRouter';
import ROUTES from '../../../router/routes';
import { PagesLinkProps } from './PagesLink.interface';
import { links } from '../../../constants/headerLinks';
import styles from './PagesLink.module.scss';

const PagesLink = ({ location }: PagesLinkProps) => {
  const currentRoute = location.pathname.replace('/', '') || ROUTES.ROOT;
  const path = links[currentRoute].link || '';
  const title = links?.[currentRoute].title || '';

  return (
    <Link className={styles.pages_link} to={path}>
      {title}
    </Link>
  );
};

export default withRouter(PagesLink);
