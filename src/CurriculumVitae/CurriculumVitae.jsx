import { useState } from 'react';
import CurriculumVitaePaper from './CurriculumVitaePaper';
import './CurriculumVitae.css';

const CurriculumVitae = () => {
  const [candidate, setCandidate] = useState({
    name: '', education: '', address: '', phone: '', graduate: '', experiences: []
  });
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [graduate, setGraduate] = useState('');
  const [experiences, setExperiences] = useState([{
    company: '', role: '', start: '', end: ''
  }]);
  const [emptyBio, setEmptyBio] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSkillChange = (event) => {
    setGraduate(event.target.value);
  };

  const handleInputChange = (event, index) => {
    const { name: input, value } = event.target;
    const list = [...experiences];
    list[index][input] = value;
    setExperiences(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...experiences];
    list.splice(index, 1);
    setExperiences(list);
  };

  const disableAddButton = (index) => {
    const emptyCurrentForm = experiences[index].company === '' && experiences[index].role === '' && experiences[index].start === '' && experiences[index].end === '';
    console.log('emptyCurrentForm :>> ', emptyCurrentForm);
    if (emptyCurrentForm) {
      setDisabledButton(true);
    }
    setDisabledButton(false);
  };

  const handleFormAndAdd = (event, index) => {
    handleInputChange(event, index);
    disableAddButton(index);
  };

  const handleAddClick = () => {
    setExperiences([...experiences, {
      company: '', role: '', start: '', end: ''
    }]);
    setDisabledButton(true);
  };

  const handleSubmit = () => {
    if (name === '' || address === '' || phone === '' || graduate === '') {
      setEmptyBio(true);
    } else {
      (
        setEmptyBio(false)
      );
    }
    setCandidate({
      name, education, phone, graduate, address, experiences
    });
    setIsButtonClick(true);
  };

  const renderFinalCV = () => {
    if (!isButtonClick) {
      return '';
    }
    if (emptyBio) {
      return <p>*Unable to proceed, Personal record forms should all be filled </p>;
    }
    return <CurriculumVitaePaper candidate={candidate} />;
  };

  console.log('candidate :>> ', candidate);
  console.log('experiences :>> ', experiences);
  console.log('disabledButton :>> ', disabledButton);

  return (
    <div className="cv-container">
      <h2>Create your CV Now!</h2>
      <h3>PERSONAL RECORD</h3>
      <form className="cv-input-container">
        <div className="cv-child-container">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" value={name} onChange={handleNameChange} />
          </label>
          <label htmlFor="education">
            Education:
            <input type="text" name="education" value={education} onChange={handleEducationChange} />
          </label>
          <label htmlFor="address">
            Address:
            <input type="text" name="address" value={address} onChange={handleAddressChange} />
          </label>
          <label htmlFor="graduate">
            Graduate:
            <input type="text" name="graduate" value={graduate} onChange={handleSkillChange} />
          </label>
          <label htmlFor="phone">
            Phone:
            <input type="text" name="phone" value={phone} onChange={handlePhoneChange} />
          </label>
        </div>
        <h3>WORK EXPERIENCE</h3>
        <div className="cv-child-container experience-container">
          {experiences.map((input, index) => (
            <>
              <label htmlFor="company">
                Company:
                <input type="text" name="company" value={input.company} onChange={(event) => handleFormAndAdd(event, index)} />
              </label>
              <label htmlFor="start">
                Year Start:
                <input type="text" name="start" value={input.start} onChange={(event) => handleFormAndAdd(event, index)} />
              </label>
              <label htmlFor="role">
                Role:
                <input type="text" name="role" value={input.role} onChange={(event) => handleFormAndAdd(event, index)} />
              </label>
              <label htmlFor="end">
                Year End:
                <input type="text" name="end" value={input.end} onChange={(event) => handleFormAndAdd(event, index)} />
                {experiences.length !== 1 && <button className="cv-button button-experience" type="button" onClick={() => handleRemoveClick(index)}>-</button>}
                {experiences.length - 1 === index && <button disabled={disabledButton} className="cv-button button-experience" type="button" onClick={() => handleAddClick(index)}>+</button>}
              </label>
            </>
          ))}
        </div>
        <button className="cv-button" type="button" onClick={handleSubmit}>Create CV!</button>
      </form>
      {renderFinalCV()}
    </div>
  );
};
export default CurriculumVitae;
