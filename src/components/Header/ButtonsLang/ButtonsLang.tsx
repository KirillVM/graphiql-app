import CustomButton from '../../CustomButton/CustomButton';
import { ButtonLangProps } from './ButtonsLang.interface';
import lang_en from '../../../assets/icons/lang-en.svg';
import lang_ru from '../../../assets/icons/lang-ru.svg';
import clsx from 'clsx';
import styles from './ButtonsLang.module.scss';

const ButtonLang = ({ children, active }: ButtonLangProps) => (
  <span className={clsx({ [styles.btn_active]: active })}>
    <CustomButton type="transparent" size="small" active={active}>
      {children}
    </CustomButton>
  </span>
);

const ButtonsLang = () => {
  const langs = [
    { lang: 'en', img: lang_en },
    { lang: 'ru', img: lang_ru },
  ];
  const aciveLang = 'en';

  return (
    <div className={styles.btns_lang}>
      {langs.map((l) => (
        <ButtonLang active={l.lang === aciveLang} key={l.lang}>
          <img className={styles.btn_img} src={l.img} alt={l.lang} />
          {l.lang}
        </ButtonLang>
      ))}
    </div>
  );
};

export default ButtonsLang;
