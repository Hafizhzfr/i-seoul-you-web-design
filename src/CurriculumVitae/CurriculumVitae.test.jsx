import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import CurriculumVitae from './CurriculumVitae';
import CurriculumVitaePaper from './CurriculumVitaePaper';

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

    const finalCV = render(<CurriculumVitaePaper />);

    expect(finalCV).toBeInTheDocument();
  });
});
