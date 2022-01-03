import { useState } from 'react';
// import CurriculumVitaePaper from './CurriculumVitaePaper';
import './CurriculumVitae.css';

const CurriculumVitae = () => {
  const [candidate, setCandidate] = useState({});
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [skill, setSkill] = useState('');
  const [experiences, setExperiences] = useState([{
    company: '', role: '', start: '', end: ''
  }]);

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
    setSkill(event.target.value);
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

  const handleAddClick = () => {
    setExperiences([...experiences, {
      company: '', role: '', start: '', end: ''
    }]);
  };

  const handleSubmit = (event) => {
    setCandidate({
      name, education, phone, skill, address, experiences
    });
    event.preventDefault();
    console.log('candidate :>> ', candidate);
    console.log('experiences :>> ', experiences);
  };

  return (
    <>
      <form className="cv-input-container">
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
        <label htmlFor="phone">
          Phone:
          <input type="text" name="phone" value={phone} onChange={handlePhoneChange} />
        </label>
        <label htmlFor="skill">
          Skill:
          <input type="text" name="skill" value={skill} onChange={handleSkillChange} />
        </label>
        <h3>Experiences</h3>
        {experiences.map((input, index) => (
          <div className="box">
            <label htmlFor="company">
              Company:
              <input type="text" name="company" value={input.company} onChange={(event) => handleInputChange(event, index)} />
            </label>
            <label htmlFor="role">
              Role:
              <input type="text" name="role" value={input.role} onChange={(event) => handleInputChange(event, index)} />
            </label>
            <label htmlFor="start">
              Year Start:
              <input type="text" name="start" value={input.start} onChange={(event) => handleInputChange(event, index)} />
            </label>
            <label htmlFor="end">
              Year End:
              <input type="text" name="end" value={input.end} onChange={(event) => handleInputChange(event, index)} />
            </label>
            <div className="btn-box">
              {experiences.length !== 1 && <button type="button" onClick={() => handleRemoveClick(index)}>Remove</button>}
              {experiences.length - 1 === index && <button type="button" onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        ))}
        <button className="cv-button" type="button" onClick={handleSubmit}>Create CV!</button>
      </form>
      {/* <CurriculumVitaePaper candidate={candidate} /> */}
    </>
  );
};
export default CurriculumVitae;
