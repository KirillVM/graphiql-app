import { render, screen } from '@testing-library/react';
import AboutProject from './AboutProject';

describe('AboutProject component', () => {
  it('renders component without errors', () => {
    render(<AboutProject />);
    expect(screen.getByText('About project')).toBeTruthy();
  });

  it('renders a link with the correct href attribute', () => {
    render(<AboutProject />);
    const link = screen.getByRole('link', { name: /assignment/i });
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe(
      'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
    );
  });
});
