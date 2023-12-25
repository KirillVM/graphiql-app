import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignOutBtn from './SignOutBtn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

jest.mock('../../../hooks/useAuth', () => ({
  useAuth: () => ({
    signOut: jest.fn(),
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('SignOutBtn component', () => {
  it('renders SignOutBtn component', () => {
    render(
      <BrowserRouter>
        <SignOutBtn />
      </BrowserRouter>
    );
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  it('calls signOut and navigate when button is clicked', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SignOutBtn />} />
        </Routes>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Sign Out'));

    waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
