import { screen, render, queryAllByRole } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('should count element in table row', () => {
    render(<ContactPage />);
    const contactPageRow = screen.queryAllByRole('row');

    expect(contactPageRow).toHaveLength(2);
  });
  it('should show Rafan phone number', () => {
    render(<ContactPage />);
    const contactPageRow = screen.queryAllByRole('row');
    const contactPageCell = queryAllByRole(contactPageRow[1], 'cell');

    expect(contactPageCell[0].innerHTML).toEqual('Rafan');
    expect(contactPageCell[1].innerHTML).toEqual('08888888');
  });
});
