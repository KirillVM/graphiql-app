import { ReactNode } from 'react';
import ROUTES from '../../../router/routes';
import { ButtonType } from '../../Button/Button.interface';

export interface AuthLinkProps {
  children: ReactNode;
  to: ROUTES;
  type: ButtonType;
}
