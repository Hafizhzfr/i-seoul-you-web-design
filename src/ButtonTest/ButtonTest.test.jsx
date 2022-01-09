import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonTest from './ButtonTest';

describe('Button Test', () => {
  it('should show Please press +1 to increment count by 1', () => {
    render(<ButtonTest />);
    const welcomeMessage = screen.getByText('Please press +1 to increment count by 1');

    expect(welcomeMessage).toBeInTheDocument();
  });

  it('should show You havent click if user havent click', () => {
    render(<ButtonTest />);
    const userNotClick = screen.getByText("You haven't click");

    expect(userNotClick).toBeInTheDocument();
  });

  it('should show You clicked 1 times if user click 1 time', () => {
    render(<ButtonTest />);
    const button = screen.getByRole('button', { name: /\+1/i });
    const beforeIncrement = screen.getByRole('heading', { name: /You haven't click/i });

    userEvent.click(button);
    const afterIncrement = screen.getByRole('heading', { name: /You clicked 1 times/i });

    expect(beforeIncrement).toBeInTheDocument();
    expect(afterIncrement).toBeInTheDocument();
  });
});
