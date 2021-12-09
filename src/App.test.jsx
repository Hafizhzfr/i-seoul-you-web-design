import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('should render HomePage when route is /', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await screen.findAllByRole('listitem');
    const homePage = screen.getByTestId('home-page');
    const contactPage = screen.queryByTestId('contact-page');

    expect(homePage).toBeInTheDocument();
    expect(contactPage).not.toBeInTheDocument();
  });

  it('should render ContactPage when user click Contact link', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await screen.findAllByRole('listitem');
    const [contactLink] = screen.getAllByRole('link');

    userEvent.click(contactLink);
    await screen.findAllByRole('listitem');
    const contactPage = screen.getByTestId('contact-page');
    const homePage = screen.queryByTestId('home-page');

    expect(contactPage).toBeInTheDocument();
    expect(homePage).not.toBeInTheDocument();
  });
});
