import '../styles/ResumeContainer.css';

export default function ResumeContainer({ value }) {
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
          {value.experience.map((experience) => {
            return (
              <>
                <li key={experience.id}>
                  <p>{experience.company}</p>
                  <p>{experience.position}</p>
                  <p>{experience.companyStartDate}</p>
                  <p>{experience.companyEndDate}</p>
                  <p>{experience.companyLocation}</p>
                </li>
              </>
            );
          })}
        </div>
        <div className="resume-educations">
          <h4>EDUCATIONS</h4>
          <hr />
          {value.educations.map((education) => {
            return (
              <>
                <li key={education.id}>
                  <p>{education.school}</p>
                  <p>{education.degree}</p>
                  <p>{education.schoolStartDate}</p>
                  <p>{education.schoolEndDate}</p>
                  <p>{education.schoolLocation}</p>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
