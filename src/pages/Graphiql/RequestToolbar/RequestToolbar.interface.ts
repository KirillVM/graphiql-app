import { Dispatch, SetStateAction } from 'react';
import { sections } from '../../../constants/playground';

export type sectionType = (typeof sections)[number];

export interface RequestToolbarProps {
  isToolbarOpen: boolean;
  onOpenToolbar: Dispatch<SetStateAction<boolean>>;
}
