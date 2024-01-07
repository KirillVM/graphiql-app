import { LocalizationData } from '@src/constants/LocalizationData';
import { Dispatch, SetStateAction } from 'react';

export type sectionType =
  LocalizationData['requestToolbar']['sections'][number];

export interface RequestToolbarProps {
  isToolbarOpen: boolean;
  onOpenToolbar: Dispatch<SetStateAction<boolean>>;
}
