import '../styles/ResumeContainer.css';

export default function ResumeContainer({ value, setValue }) {
  const experienceList = value.experience.map((experience) => {
    return (
      <li key={experience.id}>
        <div className="company-name">
          <strong>
            <p>{experience.company}</p>
          </strong>
          <p>
            {experience.companyStartDate
              .split('-')
              .splice(0, 2)
              .reverse()
              .join(', ')}{' '}
            -{' '}
            {experience.companyEndDate
              .split('-')
              .splice(0, 2)
              .reverse()
              .join(', ')}
          </p>
        </div>
        <p>{experience.position}</p>
        <p>{experience.companyLocation}</p>
        <p>{experience.jobDescription}</p>
      </li>
    );
  });
  const educationsList = value.educations.map((education) => {
    return (
      <li key={education.id}>
        <div className="school-name">
          <strong>
            <p>{education.school}</p>
          </strong>
          <p>
            {education.schoolStartDate
              .split('-')
              .splice(0, 2)
              .reverse()
              .join(', ')}{' '}
            -{' '}
            {education.schoolEndDate
              .split('-')
              .splice(0, 2)
              .reverse()
              .join(', ')}
          </p>
        </div>
        <p>{education.degree}</p>
        <p>{education.schoolLocation}</p>
      </li>
    );
  });

  return (
    <>
      <div className="resume-container">
        <div className="resume-personal-details">
          <h3>{value.personalDetails.name.toUpperCase()}</h3>
          <span>
            {`${value.personalDetails.email.toUpperCase()} | ${
              value.phoneNumber
            } | ${value.personalDetails.homeAddress}`}
          </span>
        </div>

        <div className="resume-career-summary">
          <h4>CAREER SUMMARY</h4>
          <hr />
          <p>{value.personalDetails.careerSummary}</p>
        </div>

        <div className="resume-experience">
          <h4>EXPERIENCE</h4>
          <hr />
          <ul className="experience-list">{experienceList}</ul>
        </div>
        <div className="resume-educations">
          <h4>EDUCATIONS</h4>
          <hr />
          <ul className="educations-list">{educationsList}</ul>
        </div>
      </div>
    </>
  );
}
