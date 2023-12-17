import clsx from 'clsx';
import { FormInputProps } from './FormInput.interface';
import classes from './FormInput.module.scss';
import { useFormContext } from 'react-hook-form';
import checkSVG from '@assets/icons/check.svg';
import eyeSVG from '@assets/icons/eye.svg';
import eyeHideSVG from '@assets/icons/eye-hide.svg';
import { useState } from 'react';

const FormInput = (formInputProps: FormInputProps): JSX.Element => {
  const { type, errorName, lable } = formInputProps;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const valid = errors[`${errorName}`];

  return (
    <label htmlFor={errorName} className={clsx(classes.form__row)}>
      <div className={clsx(classes['name-container'])}>
        <p
          className={clsx(classes['form__row-name'], {
            [classes.black]: !dirtyFields[`${errorName}`],
            [classes.red]: valid,
            [classes.green]: !valid,
          })}
        >
          {lable}
        </p>
        {!valid && dirtyFields[`${errorName}`] && (
          <img className={clsx(classes['check-image'])} src={checkSVG} alt="" />
        )}
      </div>
      <input
        {...register(`${errorName}`, {
          required: true,
        })}
        type={showPassword ? 'text' : `${type}`}
        id={errorName}
        className={clsx(classes.form__input, {
          [classes.border_red]: valid,
          [classes.border_black]: onFocus && valid == undefined,
          [classes.border_disabled]: onFocus! && valid == undefined,
        })}
        autoComplete="off"
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      ></input>
      {type === 'password' && (
        <div className={clsx(classes['eye-container'])}>
          {showPassword ? (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeSVG}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(false);
              }}
            />
          ) : (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeHideSVG}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(true);
              }}
            />
          )}
        </div>
      )}
      {valid ? (
        <p className={clsx(classes.error)}>{valid.message as string}</p>
      ) : (
        <p className={clsx(classes.error)}> </p>
      )}
    </label>
  );
};

export default FormInput;
