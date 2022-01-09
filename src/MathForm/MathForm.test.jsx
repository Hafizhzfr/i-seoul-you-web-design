import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MathForm from './MathForm';

describe('Math Form', () => {
  it('should show lets do some calculatin as welcome message', () => {
    render(<MathForm />);

    const welcomeMessage = screen.getByRole('heading', { name: /let's do some calculatin'/i });

    expect(welcomeMessage).toBeInTheDocument();
  });

  it('should render 15 added with 25 equals 40 if input 15 and 25, and user select addition', () => {
    render(<MathForm />);
    const operationOption = screen.getByRole('combobox');
    const formNumber = screen.getAllByRole('textbox');
    const firstNumber = formNumber[0];
    const secondNumber = formNumber[1];
    const buttonCount = screen.getByRole('button', { name: /start count!/i });

    userEvent.selectOptions(operationOption, 'addition');
    userEvent.type(firstNumber, '15');
    userEvent.type(secondNumber, '25');
    userEvent.click(buttonCount);

    const resultMessage = screen.getByText(/15 added with 25 equals 40/i);
    expect(resultMessage).toBeInTheDocument();
  });

  it('should render 15 multiplied by 25 equals 375 if input 15 and 25, user select multiplication', () => {
    render(<MathForm />);
    const operationOption = screen.getByRole('combobox');
    const formNumber = screen.getAllByRole('textbox');
    const firstNumber = formNumber[0];
    const secondNumber = formNumber[1];
    const buttonCount = screen.getByRole('button', { name: /start count!/i });

    userEvent.selectOptions(operationOption, 'multiplication');
    userEvent.type(firstNumber, '15');
    userEvent.type(secondNumber, '25');
    userEvent.click(buttonCount);

    const resultMessage = screen.getByText(/15 multiplied by 25 equals 375/i);
    expect(resultMessage).toBeInTheDocument();
  });

  it('should render 25 divided by 5 equals 5 if input 25 and 5, user select division', () => {
    render(<MathForm />);
    const operationOption = screen.getByRole('combobox');
    const formNumber = screen.getAllByRole('textbox');
    const firstNumber = formNumber[0];
    const secondNumber = formNumber[1];
    const buttonCount = screen.getByRole('button', { name: /start count!/i });

    userEvent.selectOptions(operationOption, 'division');
    userEvent.type(firstNumber, '25');
    userEvent.type(secondNumber, '5');
    userEvent.click(buttonCount);

    const resultMessage = screen.getByText(/25 divided by 5 equals 5/i);
    expect(resultMessage).toBeInTheDocument();
  });

  it('should render 25 substracted by 5 equals 20 if input 25 and 5, user select substraction', () => {
    render(<MathForm />);
    const operationOption = screen.getByRole('combobox');
    const formNumber = screen.getAllByRole('textbox');
    const firstNumber = formNumber[0];
    const secondNumber = formNumber[1];
    const buttonCount = screen.getByRole('button', { name: /start count!/i });

    userEvent.selectOptions(operationOption, 'substraction');
    userEvent.type(firstNumber, '25');
    userEvent.type(secondNumber, '5');
    userEvent.click(buttonCount);

    const resultMessage = screen.getByText(/25 substracted by 5 equals 20/i);
    expect(resultMessage).toBeInTheDocument();
  });

  it('bruh all number man, when user doesnt fill any number', () => {
    render(<MathForm />);
    const operationOption = screen.getByRole('combobox');
    const formNumber = screen.getAllByRole('textbox');
    const firstNumber = formNumber[0];
    const secondNumber = formNumber[1];
    const buttonCount = screen.getByRole('button', { name: /start count!/i });

    userEvent.selectOptions(operationOption, 'substraction');
    userEvent.type(firstNumber, '');
    userEvent.type(secondNumber, '');
    userEvent.click(buttonCount);

    const resultMessage = screen.getByText(/bruh! all number man!/i);
    expect(resultMessage).toBeInTheDocument();
  });
});
