import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  graphiqlApiUrlSelector,
  invalidApiSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import { setGraphiqlApiUrl } from '../../../store/playgroundSlice/playgroundSlice';
import { getApiShema } from '../../../store/playgroundSlice/playgroundThunks';
import { ToastContainer, toast } from 'react-toastify';
import styles from './ApiInput.module.scss';

const ApiInput = () => {
  const graphiqlApiUrl = useAppSelector(graphiqlApiUrlSelector);
  const invalidApi = useAppSelector(invalidApiSelector);
  const [value, setValue] = useState(graphiqlApiUrl);
  const dispatch = useAppDispatch();

  useEffect(() => {
    invalidApi && toast.error('The api url is ivalind');
  }, [invalidApi]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = value.trim();
    dispatch(setGraphiqlApiUrl(url));
    dispatch(getApiShema(url));
  };

  return (
    <>
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
      <ToastContainer className={'toast'} />
    </>
  );
};

export default ApiInput;
