import PropTypes from 'prop-types';

const CurriculumVitaePaper = ({ candidate }) => {
  const {
    name, education, address, phone, graduate, experiences
  } = candidate;

  const renderExperience = () => {
    const emptyExperience = experiences[0].company === '' && experiences[0].role === '' && experiences[0].start === '' && experiences[0].end === '';
    if (emptyExperience) {
      return <p>No Work Experience</p>;
    }
    return (
      experiences.map((experience) => (
        <li>
          <p className="company">
            {experience.company}
          </p>
          Role:
          {' '}
          {experience.role}
          <br />
          {experience.start}
          {' - '}
          {experience.end}
          , Duration:
          {' '}
          {parseInt(experience.end, 10) - parseInt(experience.start, 10)}
          {' Years'}
          <br />
          <hr />
          <br />
        </li>
      ))
    );
  };

  return (
    <div className="cv-paper-box">
      <div className="cv-paper-content">
        <div className="cv-paper-content-child">
          <p className="sub-title">
            Personal Record
          </p>
          <p>
            {'Name: '}
            <br />
            <strong>
              {name}
            </strong>
          </p>
          <p>
            {'Education: '}
            <br />
            <strong>
              {education}
            </strong>
          </p>
          <p>
            {'Year graduate: '}
            <br />
            <strong>
              {graduate}
            </strong>

          </p>
          <p>
            {'Address: '}
            <br />
            <strong>
              {address}
            </strong>
          </p>
          <p>
            {'Phone Number: '}
            <br />
            <strong>
              {phone}
            </strong>
          </p>
        </div>
        <div className="cv-paper-content-child">
          <p className="sub-title">
            Work Experiences
          </p>
          <ul>
            {renderExperience()}
          </ul>
        </div>
      </div>
    </div>
  );
};

CurriculumVitaePaper.propTypes = {
  candidate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    graduate: PropTypes.string.isRequired,
    experiences: PropTypes.instanceOf(Array).isRequired
  }).isRequired
};

export default CurriculumVitaePaper;
