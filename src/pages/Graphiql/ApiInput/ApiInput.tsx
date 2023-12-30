import { ChangeEvent, FormEvent, useState } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { graphiqlApiUrlSelector } from '../../../store/playgroundSlice/playgroundSelectors';
import { setGraphiqlApiUrl } from '../../../store/playgroundSlice/playgroundSlice';
import styles from './ApiInput.module.scss';

const ApiInput = () => {
  const graphiqlApiUrl = useAppSelector(graphiqlApiUrlSelector);
  const [value, setValue] = useState(graphiqlApiUrl);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setGraphiqlApiUrl(value.trim()));
  };

  return (
    <form className={styles.input_form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={value}
        placeholder="Your Endpoint"
        onChange={handleChange}
      />
      <CustomButton type="black" size="large">
        Send
      </CustomButton>
    </form>
  );
};

export default ApiInput;
