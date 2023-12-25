import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormInput from './FormInput';
import { useFormContext } from 'react-hook-form';

jest.mock('react-hook-form', () => {
  const originalModule = jest.requireActual('react-hook-form');

  return {
    ...originalModule,
    useFormContext: jest.fn(),
  };
});

describe('FormInput', () => {
  it('renders FormInput correctly', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {},
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const labelElement = screen.getByText('Username');
    expect(labelElement).toBeTruthy();

    const inputElement = screen.getByLabelText('Username');
    expect(inputElement).toBeTruthy();
  });

  it('renders and validates required text input', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: { username: { message: 'Username is required' } },
        dirtyFields: {},
      },
    };
    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const labelElement = screen.getByText('Username');
    expect(labelElement).toBeTruthy();

    const inputElement = screen.getByLabelText('Username');
    expect(inputElement).toBeTruthy();

    waitFor(() => {
      const errorMessage = screen.getByText('Username is required');
      expect(errorMessage).toBeTruthy();
    });
  });

  it('renders and validates required email input', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: { email: { message: 'Email is required' } },
        dirtyFields: {},
      },
    };
    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'email' as const,
      errorName: 'email',
      label: 'Email',
    };

    render(<FormInput {...formInputProps} />);

    const labelElement = screen.getByText('Email');
    expect(labelElement).toBeTruthy();

    const inputElement = screen.getByLabelText('Email');
    expect(inputElement).toBeTruthy();

    waitFor(() => {
      const errorMessage = screen.getByText((content) => {
        return content === 'Email is required';
      });
      expect(errorMessage).toBeTruthy();
    });
  });

  it('renders and validates required password input', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: { password: { message: 'Password is required' } },
        dirtyFields: {},
      },
    };
    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'password' as const,
      errorName: 'password',
      label: 'Password',
    };

    render(<FormInput {...formInputProps} />);

    const labelElement = screen.getByText('Password');
    expect(labelElement).toBeTruthy();

    const inputElement = screen.getByLabelText('Password');
    expect(inputElement).toBeTruthy();

    waitFor(() => {
      const errorMessage = screen.getByText('Password is required');
      expect(errorMessage).toBeTruthy();
    });
  });

  it('renders and validates required confirm password input', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: { confirmPassword: { message: 'Passwords do not match' } },
        dirtyFields: {},
      },
    };
    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'password' as const,
      errorName: 'confirmPassword',
      label: 'Confirm Password',
    };

    render(<FormInput {...formInputProps} />);

    const labelElement = screen.getByText('Confirm Password');
    expect(labelElement).toBeTruthy();

    const inputElement = screen.getByLabelText('Confirm Password');
    expect(inputElement).toBeTruthy();

    waitFor(() => {
      const errorMessage = screen.getByText('Passwords do not match');
      expect(errorMessage).toBeTruthy();
    });
  });

  it('submits the form with valid data', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {},
      },
    };
    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const inputElement = screen.getByLabelText('Username');
    fireEvent.change(inputElement, { target: { value: 'validUsername' } });
  });

  it('toggles password visibility', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {},
      },
    };
    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'password' as const,
      errorName: 'password',
      label: 'Password',
    };

    render(<FormInput {...formInputProps} />);

    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    expect(passwordInput.type).toBe('password');

    fireEvent.click(screen.getByRole('img'));

    expect(passwordInput.type).toBe('text');

    fireEvent.click(screen.getByRole('img'));

    expect(passwordInput.type).toBe('password');
  });

  it('renders check image when not invalid and dirty', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {
          username: true,
        },
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const checkImage = screen.getByAltText('Check Image');
    expect(checkImage).toBeTruthy();
  });

  it('does not render check image when invalid', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {
          username: {
            message: 'Username is required',
          },
        },
        dirtyFields: {
          username: true,
        },
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const checkImage = screen.queryByAltText('Check Image');
    expect(checkImage).not.toBeTruthy();
  });

  it('adds border_black class on focus when isInvalid is undefined', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {},
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const inputElement = screen.getByLabelText('Username');

    fireEvent.focus(inputElement);

    waitFor(() => {
      expect(inputElement.classList.contains('border_black')).toBe(true);
    });
  });

  it('adds border_disabled class on focus when isInvalid is undefined', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {},
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const inputElement = screen.getByLabelText('Username');

    fireEvent.focus(inputElement);

    waitFor(() => {
      expect(inputElement.classList.contains('border_disabled')).toBe(true);
    });
  });

  it('does not add border classes on blur when isInvalid is undefined', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {},
        dirtyFields: {},
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const inputElement = screen.getByLabelText('Username');

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    waitFor(() => {
      expect(inputElement.classList.contains('border_black')).toBe(true);
      expect(inputElement.classList.contains('border_disabled')).toBe(false);
    });
  });

  it('does not add border classes on focus when isInvalid is true', () => {
    const mockedContext = {
      register: jest.fn(),
      formState: {
        errors: {
          username: {
            message: 'Username is required',
          },
        },
        dirtyFields: {},
      },
    };

    (useFormContext as jest.Mock).mockReturnValue(mockedContext);

    const formInputProps = {
      type: 'text' as const,
      errorName: 'username',
      label: 'Username',
    };

    render(<FormInput {...formInputProps} />);

    const inputElement = screen.getByLabelText('Username');

    fireEvent.focus(inputElement);

    waitFor(() => {
      expect(inputElement.classList.contains('border_black')).toBe(false);
      expect(inputElement.classList.contains('border_disabled')).toBe(false);
    });
  });
});
