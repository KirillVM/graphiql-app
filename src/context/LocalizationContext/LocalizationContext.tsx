import { createContext, useEffect, useState } from 'react';
import {
  LocalizationContexValue,
  LocalizationContextProps,
} from './LocalizationContext.interface';
import {
  LocalizationData,
  LocalizationKey,
  localization,
} from '@src/constants/LocalizationData';

export const LocalizationContext = createContext<LocalizationContexValue>(
  null!
);

export const LocalizationProvider = ({
  children,
}: LocalizationContextProps) => {
  const [activeLang, setActiveLang] = useState<LocalizationKey>('en');

  const [localizationData, setLocalizationData] = useState<LocalizationData>(
    localization['en']
  );

  useEffect(() => {
    setLocalizationData(localization[activeLang]);
  }, [activeLang]);

  const value = { activeLang, localizationData, setActiveLang };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
