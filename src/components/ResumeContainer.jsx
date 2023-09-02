import '../styles/ResumeContainer.css';

export default function ResumeContainer() {
  return (
    <>
      <div className="cv-container">
        <div className="cv-personal-details">
          <h3></h3>
        </div>

        <div className="cv-career-summary">
          <h4>CAREER SUMMARY</h4>
          <hr />
          <p></p>
        </div>
        <div className="cv-experience">
          <h4>EXPERIENCE</h4>
          <hr />
        </div>
        <div className="cv-educations">
          <h4>EDUCATIONS</h4>
          <hr />
        </div>
        <div className="cv-skills">
          <h4>SKILLS</h4>
          <hr />
        </div>
      </div>
    </>
  );
}
