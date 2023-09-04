import '../styles/ResumeContainer.css';

export default function ResumeContainer({ value }) {
  return (
    <>
      <div className="resume-container">
        <div className="resume-personal-details">
          <h3>{value.name.toUpperCase()}</h3>
          <span>
            {`${value.email.toUpperCase()} | ${value.phoneNumber} | ${
              value.homeAddress
            }`}
          </span>
        </div>

        <div className="resume-career-summary">
          <h4>CAREER SUMMARY</h4>
          <hr />
          <p>{value.careerSummary}</p>
        </div>
        <div className="resume-experience">
          <h4>EXPERIENCE</h4>
          <hr />
        </div>
        <div className="resume-educations">
          <h4>EDUCATIONS</h4>
          <hr />
        </div>
      </div>
    </>
  );
}
