import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingList from './ShoppingList';

describe('shopping list', () => {
  it('should render the page', () => {
    render(<ShoppingList />);
    const welcomeMessage = screen.getByRole('heading', { name: /click your desired item/i });
    const subtitleNoShop = screen.getByText(/your shopping list will appear once you click on item/i);
    const apple = screen.getByRole('button', { name: /apple, \$2/i });
    const mango = screen.getByRole('button', { name: /mango, \$3/i });
    const grape = screen.getByRole('button', { name: /grape, \$4/i });
    const melon = screen.getByRole('button', { name: /melon, \$10/i });
    const durian = screen.getByRole('button', { name: /durian, \$15/i });

    expect(welcomeMessage).toBeInTheDocument();
    expect(subtitleNoShop).toBeInTheDocument();
    expect(apple).toBeInTheDocument();
    expect(mango).toBeInTheDocument();
    expect(grape).toBeInTheDocument();
    expect(melon).toBeInTheDocument();
    expect(durian).toBeInTheDocument();
  });

  it('should render the whole table with total price', () => {
    render(<ShoppingList />);
    const apple = screen.getByRole('button', { name: /apple, \$2/i });
    const mango = screen.getByRole('button', { name: /mango, \$3/i });
    userEvent.click(apple);
    userEvent.click(mango);

    const totalPrice = screen.getByText(/total price: \$5/i);
    const table = screen.getByRole('table');
    const rows = screen.getAllByRole('row');

    expect(totalPrice).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(rows).toHaveLength(3);
  });
});
