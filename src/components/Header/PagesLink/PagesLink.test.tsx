import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PagesLink from './PagesLink';

jest.mock('@constants/headerLinks', () => ({
  links: {
    sampleRoute1: { link: '/sample1', title: 'Sample Title 1' },
    sampleRoute2: { link: '/sample2', title: 'Sample Title 2' },
  },
}));

describe('PagesLink component', () => {
  it('renders a link with the correct text', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<PagesLink />} />
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('Sample Title 1')).toBeTruthy();
    });
  });

  it('renders a link with the correct path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<PagesLink />} />
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      const linkElement = screen.getByRole('link');
      const expectedHref = '/sample1';
      expect(linkElement.getAttribute('href')).toBe(expectedHref);
    });
  });
});
