import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
  it('should show hello world in document', () => {
    render(<App />);

    expect(screen.getByRole('heading', 'hello world')).toBeInTheDocument();
  });
});

describe('Name of the group', () => {
  it('should show John in list', () => {
    render(<App />);

    const contacts = screen.getAllByRole('listitem');

    expect(contacts[0]).toHaveTextContent('John');
    expect(contacts[0]).toHaveTextContent('081220488765');
    expect(contacts[1]).toHaveTextContent('Bob');
    expect(contacts[1]).toHaveTextContent('08122048889');
  });
});
