import PropTypes from 'prop-types';

const CurriculumVitaePaper = ({ candidate }) => {
  const {
    name, education, address, phone, skill, experiences
  } = candidate;

  return (
    <>
      <h1>{name}</h1>
      <h1>{education}</h1>
      <h1>{address}</h1>
      <h1>{phone}</h1>
      <h1>{skill}</h1>
      <ul>
        {experiences.map((experience) => (
          <li>
            Company:
            {' '}
            {experience.company}
            <br />
            Role:
            {' '}
            {experience.role}
            <br />
            {experience.start}
            {' - '}
            {experience.end}
            <br />
            Duration:
            {' '}
            {parseInt(experience.end, 10) - parseInt(experience.start, 10)}
            {' Years'}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

CurriculumVitaePaper.propTypes = {
  candidate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    experiences: PropTypes.instanceOf(Array).isRequired
  }).isRequired
};

export default CurriculumVitaePaper;
