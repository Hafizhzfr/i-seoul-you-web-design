import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import CurriculumVitae from './CurriculumVitae';

describe('CurriculumVitae', () => {
  it('should render welcome Create your CV Now', () => {
    render(<CurriculumVitae />);
    const welcomeMessage = screen.getByText(/Create your CV Now!/i);

    expect(welcomeMessage).toBeInTheDocument();
  });

  it('should render work experience and personal record titles', () => {
    render(<CurriculumVitae />);
    const workExperienceTitle = screen.getByRole('heading', { name: /work experience/i });
    const personalRecordTitle = screen.getByRole('heading', { name: /personal record/i });

    expect(workExperienceTitle).toBeInTheDocument();
    expect(personalRecordTitle).toBeInTheDocument();
  });

  it('should render Unable to proceed, Personal record forms should all be filled', () => {
    render(<CurriculumVitae />);
    const createCVButton = screen.getByRole('button', { name: /create cv!/i });
    userEvent.click(createCVButton);

    const noPersonalRecordMessage = screen.getByText(/unable to proceed, Personal record forms should all be filled/i);

    expect(noPersonalRecordMessage).toBeInTheDocument();
  });

  it('should render CV, if personal record forms are all filled', () => {
    render(<CurriculumVitae />);
    const nameForm = within(screen.getByText(/name:/i)).getByRole('textbox');
    const educationForm = within(screen.getByText(/education:/i)).getByRole('textbox');
    const addressForm = within(screen.getByText(/address:/i)).getByRole('textbox');
    const graduateForm = within(screen.getByText(/graduate:/i)).getByRole('textbox');
    const phoneForm = within(screen.getByText(/phone:/i)).getByRole('textbox');
    const createCVButton = screen.getByRole('button', { name: /create cv!/i });

    userEvent.type(nameForm, 'Hafizh');
    userEvent.type(educationForm, 'UI');
    userEvent.type(addressForm, 'BSD');
    userEvent.type(graduateForm, '2021');
    userEvent.type(phoneForm, '081384866839');
    userEvent.click(createCVButton);
    const nameInCV = screen.getByText(/hafizh/i);
    const educationInCV = screen.getByText(/ui/i);
    const graduateInCV = screen.getByText(/2021/i);
    const addressInCV = screen.getByText(/bsd/i);
    const phoneInCV = screen.getByText(/081384866839/i);
    const noWork = screen.getByText(/no work experience/i);

    expect(nameForm).toHaveValue('Hafizh');
    expect(educationForm).toHaveValue('UI');
    expect(addressForm).toHaveValue('BSD');
    expect(phoneForm).toHaveValue('081384866839');
    expect(nameInCV).toBeInTheDocument();
    expect(educationInCV).toBeInTheDocument();
    expect(graduateInCV).toBeInTheDocument();
    expect(addressInCV).toBeInTheDocument();
    expect(phoneInCV).toBeInTheDocument();
    expect(noWork).toBeInTheDocument();
  });

  it('should render CV, with work experience if personal record and work experience forms are all filled', () => {
    render(<CurriculumVitae />);
    const nameForm = within(screen.getByText(/name:/i)).getByRole('textbox');
    const educationForm = within(screen.getByText(/education:/i)).getByRole('textbox');
    const addressForm = within(screen.getByText(/address:/i)).getByRole('textbox');
    const graduateForm = within(screen.getByText(/graduate:/i)).getByRole('textbox');
    const phoneForm = within(screen.getByText(/phone:/i)).getByRole('textbox');
    const companyForm = within(screen.getByText(/company:/i)).getByRole('textbox');
    const startForm = within(screen.getByText(/year start:/i)).getByRole('textbox');
    const endForm = within(screen.getByText(/year end:/i)).getByRole('textbox');
    const roleForm = within(screen.getByText(/role:/i)).getByRole('textbox');
    const createCVButton = screen.getByRole('button', { name: /create cv!/i });

    userEvent.type(nameForm, 'Hafizh');
    userEvent.type(educationForm, 'UI');
    userEvent.type(addressForm, 'BSD');
    userEvent.type(graduateForm, '2021');
    userEvent.type(phoneForm, '081384866839');
    userEvent.type(companyForm, 'BTPN');
    userEvent.type(startForm, '2020');
    userEvent.type(endForm, '2025');
    userEvent.type(roleForm, 'Direktur');
    userEvent.click(createCVButton);
    screen.logTestingPlaygroundURL();
    const nameInCV = screen.getByText(/hafizh/i);
    const educationInCV = screen.getByText(/ui/i);
    const graduateInCV = screen.getByText(/2021/i);
    const addressInCV = screen.getByText(/bsd/i);
    const phoneInCV = screen.getByText(/081384866839/i);
    const companyInCV = screen.getByText(/btpn/i);
    const totalJobs = screen.getAllByRole('listitem');

    expect(nameForm).toHaveValue('Hafizh');
    expect(educationForm).toHaveValue('UI');
    expect(addressForm).toHaveValue('BSD');
    expect(phoneForm).toHaveValue('081384866839');
    expect(companyForm).toHaveValue('BTPN');
    expect(startForm).toHaveValue('2020');
    expect(endForm).toHaveValue('2025');
    expect(roleForm).toHaveValue('Direktur');
    expect(nameInCV).toBeInTheDocument();
    expect(educationInCV).toBeInTheDocument();
    expect(graduateInCV).toBeInTheDocument();
    expect(addressInCV).toBeInTheDocument();
    expect(phoneInCV).toBeInTheDocument();
    expect(companyInCV).toBeInTheDocument();
    expect(totalJobs).toHaveLength(1);
  });

  it('should add more forms if plus button is pressed and work form is filled', () => {
    render(<CurriculumVitae />);
    const companyForm = within(screen.getByText(/company:/i)).getByRole('textbox');
    const startForm = within(screen.getByText(/year start:/i)).getByRole('textbox');
    const endForm = within(screen.getByText(/year end:/i)).getByRole('textbox');
    const roleForm = within(screen.getByText(/role:/i)).getByRole('textbox');
    const plusButton = screen.getByRole('button', { name: /\+/i });

    userEvent.type(companyForm, 'BTPN');
    userEvent.type(startForm, '2020');
    userEvent.type(endForm, '2025');
    userEvent.type(roleForm, 'Direktur');
    userEvent.click(plusButton);
    screen.logTestingPlaygroundURL();
    const totalCompany = screen.getAllByText(/company:/i);
    const totalStart = screen.getAllByText(/year start:/i);
    const totalEnd = screen.getAllByText(/year end:/i);
    const totalRole = screen.getAllByText(/role:/i);

    expect(companyForm).toHaveValue('BTPN');
    expect(startForm).toHaveValue('2020');
    expect(endForm).toHaveValue('2025');
    expect(roleForm).toHaveValue('Direktur');
    expect(totalCompany).toHaveLength(2);
    expect(totalStart).toHaveLength(2);
    expect(totalEnd).toHaveLength(2);
    expect(totalRole).toHaveLength(2);
  });

  it('should add more forms if plus button is pressed and work form is filled and remove form if deleted', () => {
    render(<CurriculumVitae />);
    const companyForm = within(screen.getByText(/company:/i)).getByRole('textbox');
    const startForm = within(screen.getByText(/year start:/i)).getByRole('textbox');
    const endForm = within(screen.getByText(/year end:/i)).getByRole('textbox');
    const roleForm = within(screen.getByText(/role:/i)).getByRole('textbox');
    const plusButton = screen.getByRole('button', { name: /\+/i });

    userEvent.type(companyForm, 'BTPN');
    userEvent.type(startForm, '2020');
    userEvent.type(endForm, '2025');
    userEvent.type(roleForm, 'Direktur');
    userEvent.click(plusButton);
    const minusButton = screen.getAllByRole('button', { name: /\-/i });
    userEvent.click(minusButton[1]);
    const totalCompany = screen.getAllByText(/company:/i);
    const totalStart = screen.getAllByText(/year start:/i);
    const totalEnd = screen.getAllByText(/year end:/i);
    const totalRole = screen.getAllByText(/role:/i);

    expect(companyForm).toHaveValue('BTPN');
    expect(startForm).toHaveValue('2020');
    expect(endForm).toHaveValue('2025');
    expect(roleForm).toHaveValue('Direktur');
    expect(totalCompany).toHaveLength(1);
    expect(totalStart).toHaveLength(1);
    expect(totalEnd).toHaveLength(1);
    expect(totalRole).toHaveLength(1);
  });

  it('should unable to press plus button if work experience is not filled', () => {
    render(<CurriculumVitae />);
    const plusButton = screen.getByRole('button', { name: /\+/i });

    userEvent.click(plusButton);
    const totalCompany = screen.getAllByText(/company:/i);
    const totalStart = screen.getAllByText(/year start:/i);
    const totalEnd = screen.getAllByText(/year end:/i);
    const totalRole = screen.getAllByText(/role:/i);

    expect(totalCompany).toHaveLength(1);
    expect(totalStart).toHaveLength(1);
    expect(totalEnd).toHaveLength(1);
    expect(totalRole).toHaveLength(1);
  });
});
