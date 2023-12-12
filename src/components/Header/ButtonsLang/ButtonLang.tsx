import CustomButton from '../../CustomButton/CustomButton';
import { ButtonLangProps } from './ButtonsLang.interface';
import styles from './ButtonsLang.module.scss';

const ButtonLang = ({ lang, active }: ButtonLangProps) => (
  <CustomButton type="transparent" size="small" active={active}>
    {lang}
  </CustomButton>
);

const ButtonsLang = () => {
  const langs = ['en', 'ru'];
  const aciveLang = 'en';

  return (
    <div className={styles.btns_lang}>
      {langs.map((lang) => (
        <ButtonLang lang={lang} active={lang === aciveLang} key={lang} />
      ))}
    </div>
  );
};

export default ButtonsLang;
