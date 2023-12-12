import CustomButton from '../../CustomButton/CustomButton';
import { ButtonLangProps } from './ButtonsLang.interface';
import lang_en from '../../../assets/icons/lang-en.svg';
import lang_ru from '../../../assets/icons/lang-ru.svg';
import styles from './ButtonsLang.module.scss';

const ButtonLang = ({ children, active }: ButtonLangProps) => (
  <CustomButton type="transparent" size="small" active={active}>
    {children}
  </CustomButton>
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
          <img className={styles.btn_lang} src={l.img} alt={l.lang} />
          {l.lang}
        </ButtonLang>
      ))}
    </div>
  );
};

export default ButtonsLang;
