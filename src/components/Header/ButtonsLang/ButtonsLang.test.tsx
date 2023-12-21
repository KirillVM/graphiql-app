import { render, fireEvent, waitFor } from '@testing-library/react';
import ButtonsLang from './ButtonsLang';

describe('ButtonsLang component', () => {
  it('renders with language buttons', () => {
    const { getByText } = render(<ButtonsLang />);

    const buttonEn = getByText('en');
    const buttonRu = getByText('ru');

    expect(buttonEn).toBeTruthy();
    expect(buttonRu).toBeTruthy();
  });

  it('changes active language on button click', () => {
    const { getByText } = render(<ButtonsLang />);

    const buttonEn = getByText('en');
    const buttonRu = getByText('ru');

    waitFor(() => {
      expect(buttonEn.classList.contains('btn_active')).toBe(true);
      expect(buttonRu.classList.contains('btn_active')).toBe(false);
    });

    fireEvent.click(buttonRu);

    waitFor(() => {
      expect(buttonEn.classList.contains('btn_active')).toBe(false);
      expect(buttonRu.classList.contains('btn_active')).toBe(true);
    });
  });
});
