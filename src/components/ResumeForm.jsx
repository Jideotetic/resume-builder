import PersonalDetailsForm from './PersonalDetailsForm';
import PersonalDetails from './PersonalDetails';
import EducationsForm from './EducationsForm';
import Educations from './Educations';
import EditEducation from './EditEducation';
import ExperienceForm from './ExperienceForm';
import Button from './Button';
import personalDetailsIcon from '../assets/user-solid.svg';
import angleUp from '../assets/angle-up-solid.svg';
import angleDown from '../assets/angle-down-solid.svg';
import educationsIcon from '../assets/user-graduate-solid.svg';
import experienceIcon from '../assets/briefcase-solid.svg';
import '../styles/ResumeForm.css';
import React from 'react';

export default function ResumeForm({
  value,
  setValue,
  revealPersonalDetails,
  setRevealPersonalDetails,
  revealEducations,
  setRevealEducations,
  revealExperience,
  setRevealExperience,
  editPersonalDetails,
  setEditPersonalDetails,
  addEducation,
  setAddEducation,
  editEducation,
  setEditEducation,
}) {
  function handleRevealPersonalDetails() {
    setRevealPersonalDetails(!revealPersonalDetails);
  }

  function handleRevealEducations() {
    setRevealEducations(!revealEducations);
  }

  function handleRevealExperience() {
    setRevealExperience(!revealExperience);
  }

  return (
    <div className="resume-form-wrapper">
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
          {revealPersonalDetails ? (
            <img
              className="hide-details"
              src={angleUp}
              alt="icon"
              onClick={handleRevealPersonalDetails}
            />
          ) : (
            <img
              className="show-details"
              src={angleDown}
              alt="icon"
              onClick={handleRevealPersonalDetails}
            />
          )}
        </div>

        {revealPersonalDetails ? (
          editPersonalDetails ? (
            <PersonalDetailsForm
              value={value}
              setValue={setValue}
              editPersonalDetails={editPersonalDetails}
              setEditPersonalDetails={setEditPersonalDetails}
            />
          ) : (
            <PersonalDetails
              value={value}
              editPersonalDetails={editPersonalDetails}
              setEditPersonalDetails={setEditPersonalDetails}
            />
          )
        ) : null}
      </div>
      <div className="educations-wrapper">
        <div className="educations-header">
          <div className="educations-title">
            <img className="educations-icon" src={educationsIcon} alt="Icon" />
            <h2>Educations</h2>
          </div>
          {revealEducations ? (
            <img
              className="hide-educations"
              src={angleUp}
              alt="icon"
              onClick={handleRevealEducations}
            />
          ) : (
            <img
              className="show-educations"
              src={angleDown}
              alt="icon"
              onClick={handleRevealEducations}
            />
          )}
        </div>
        {revealEducations ? (
          editEducation ? (
            value.educations.map((education, i) => {
              return (
                <React.Fragment key={i}>
                  <EditEducation
                    value={value}
                    setValue={setValue}
                    addEducation={addEducation}
                    setAddEducation={setAddEducation}
                  />
                </React.Fragment>
              );
            })
          ) : addEducation ? (
            <EducationsForm
              value={value}
              setValue={setValue}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
            />
          ) : (
            <>
              {value.educations.map((education, i) => {
                return (
                  <React.Fragment key={i}>
                    <Educations education={education} />
                  </React.Fragment>
                );
              })}
              {/* <Educations
                value={value}
                setValue={setValue}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
              /> */}
              <Button
                name="Add Education"
                addEducation={addEducation}
                setAddEducation={setAddEducation}
              />
            </>
          )
        ) : null}
        {/* {revealEducations ? (
          editEducation ? (
            <EditEducation />
          ) : value.educations.length === 0 && !addEducation ? (
            <Button
              name="Add Education"
              revealEducations={revealEducations}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
            />
          ) : value.educations.length > 0 && !addEducation ? (
            <Educations
              value={value}
              setValue={setValue}
              revealEducations={revealEducations}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
              editEducation={editEducation}
              setEditEducation={setEditEducation}
            />
          ) : addEducation ? (
            <EducationsForm
              value={value}
              setValue={setValue}
              revealEducations={revealEducations}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
            />
          ) : null
        ) : null} */}
      </div>
      <div className="experience-wrapper">
        <div className="experience-header">
          <div className="experience-title">
            <img className="experience-icon" src={experienceIcon} alt="Icon" />
            <h2>Experience</h2>
          </div>
          {revealExperience ? (
            <img
              className="reveal-icon"
              src={angleUp}
              alt="icon"
              onClick={handleRevealExperience}
            />
          ) : (
            <img
              className="reveal-icon"
              src={angleDown}
              alt="icon"
              onClick={handleRevealExperience}
            />
          )}
        </div>
        {revealExperience ? (
          <ExperienceForm value={value} setValue={setValue} />
        ) : null}
      </div>
    </div>
  );
}
