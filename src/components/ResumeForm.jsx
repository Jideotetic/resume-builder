import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import EducationsForm from './EducationsForm';
import personalDetailsIcon from '../assets/user-solid.svg';
import angleUp from '../assets/angle-up-solid.svg';
import angleDown from '../assets/angle-down-solid.svg';
import educationsIcon from '../assets/user-graduate-solid.svg';
import experienceIcon from '../assets/briefcase-solid.svg';
import '../styles/ResumeForm.css';

export default function ResumeForm() {
  const [reveal, setReveal] = useState(false);
  function handleReveal() {
    setReveal(!reveal);
  }
  return (
    <>
      <div>
        <div className="personal-details-wrapper">
          <div className="personal-details-header">
            <div className="personal-details-title">
              <img
                className="personal-details-icon"
                src={personalDetailsIcon}
                alt="Icon"
              />
              <h2>Personal Details</h2>
            </div>
            {reveal ? (
              <img
                className="reveal-icon"
                src={angleUp}
                alt="icon"
                onClick={handleReveal}
              />
            ) : (
              <img
                className="reveal-icon"
                src={angleDown}
                alt="icon"
                onClick={handleReveal}
              />
            )}
          </div>

          {reveal ? <PersonalDetailsForm /> : null}
        </div>
        <div className="educations-wrapper">
          <div className="educations-header">
            <div className="educations-title">
              <img
                className="educations-icon"
                src={educationsIcon}
                alt="Icon"
              />
              <h2>Educations</h2>
            </div>
            {reveal ? (
              <img
                className="reveal-icon"
                src={angleUp}
                alt="icon"
                onClick={handleReveal}
              />
            ) : (
              <img
                className="reveal-icon"
                src={angleDown}
                alt="icon"
                onClick={handleReveal}
              />
            )}
          </div>
          {reveal ? <EducationsForm /> : null}
        </div>
        <div className="experience-wrapper">
          <div className="experience-header">
            <div className="experience-title">
              <img
                className="experience-icon"
                src={experienceIcon}
                alt="Icon"
              />
              <h2>Experience</h2>
            </div>
            {reveal ? (
              <img
                className="reveal-icon"
                src={angleUp}
                alt="icon"
                onClick={handleReveal}
              />
            ) : (
              <img
                className="reveal-icon"
                src={angleDown}
                alt="icon"
                onClick={handleReveal}
              />
            )}
          </div>
          {reveal ? <EducationsForm /> : null}
        </div>
      </div>
    </>
  );
}
