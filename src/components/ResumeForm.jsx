import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import PersonalDetails from './PersonalDetails';
import EducationsForm from './EducationsForm';
import Educations from './Educations';
import EditEducation from './EditEducation';
// import ExperienceForm from './ExperienceForm';
import Button from './Button';
import personalDetailsIcon from '../assets/user-solid.svg';
import angleUp from '../assets/angle-up-solid.svg';
import angleDown from '../assets/angle-down-solid.svg';
import educationsIcon from '../assets/user-graduate-solid.svg';
// import experienceIcon from '../assets/briefcase-solid.svg';
import '../styles/ResumeForm.css';

export default function ResumeForm({
  value,
  setValue,
  showPersonalDetails,
  setShowPersonalDetails,
  editPersonalDetails,
  setEditPersonalDetails,
  showEducations,
  setShowEducations,
  addEducation,
  setAddEducation,
  editEducation,
  setEditEducation,
}) {
  const [selectedEducationId, setSelectedEducationId] = useState(0);

  function handleShowPersonalDetails() {
    setShowPersonalDetails(!showPersonalDetails);
  }

  function handleShowEducations() {
    setShowEducations(!showEducations);
  }

  // function handleRevealExperience() {
  //   setRevealExperience(!revealExperience);
  // }

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
          {showPersonalDetails ? (
            <img
              className="hide-details"
              src={angleUp}
              alt="icon"
              onClick={handleShowPersonalDetails}
            />
          ) : (
            <img
              className="show-details"
              src={angleDown}
              alt="icon"
              onClick={handleShowPersonalDetails}
            />
          )}
        </div>
        {showPersonalDetails ? (
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
              showPersonalDetails={showPersonalDetails}
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
          {showEducations ? (
            <img
              className="hide-educations"
              src={angleUp}
              alt="icon"
              onClick={handleShowEducations}
            />
          ) : (
            <img
              className="show-educations"
              src={angleDown}
              alt="icon"
              onClick={handleShowEducations}
            />
          )}
        </div>
        {showEducations ? (
          addEducation ? (
            <EducationsForm
              value={value}
              setValue={setValue}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
            />
          ) : editEducation ? (
            <EditEducation
              value={value}
              setValue={setValue}
              editEducation={editEducation}
              setEditEducation={setEditEducation}
              selectedEducationId={selectedEducationId}
            />
          ) : (
            <>
              {value.educations.map((education) => {
                return (
                  <Educations
                    key={education.id}
                    id={education.id}
                    education={education}
                    selectedEducationId={selectedEducationId}
                    setSelectedEducationId={setSelectedEducationId}
                    editEducation={editEducation}
                    setEditEducation={setEditEducation}
                    showEducations={showEducations}
                    value={value}
                    setValue={setValue}
                  />
                );
              })}

              <Button
                name="Add Education"
                addEducation={addEducation}
                setAddEducation={setAddEducation}
              />
            </>
          )
        ) : null}
      </div>
      {/* <div className="educations-wrapper">
        <div className="educations-header">
          <div className="educations-title">
            <img className="educations-icon" src={educationsIcon} alt="Icon" />
            <h2>Educations</h2>
          </div>
          
        </div>
        {showEducations ? (
          editEducation ? (
            value.educations.map((education, i) => {
              return (
                <React.Fragment key={i}>
                  <EditEducation
                    value={value}
                    id={i}
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
              <Educations
                value={value}
                setValue={setValue}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
              />
              <Button
                name="Add Education"
                addEducation={addEducation}
                setAddEducation={setAddEducation}
              />
            </>
          )
        ) : null}
        {showEducations ? (
          editEducation ? (
            <EditEducation />
          ) : value.educations.length === 0 && !addEducation ? (
            <Button
              name="Add Education"
              showEducations={showEducations}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
            />
          ) : value.educations.length > 0 && !addEducation ? (
            <Educations
              value={value}
              setValue={setValue}
              showEducations={showEducations}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
              editEducation={editEducation}
              setEditEducation={setEditEducation}
            />
          ) : addEducation ? (
            <EducationsForm
              value={value}
              setValue={setValue}
              showEducations={showEducations}
              addEducation={addEducation}
              setAddEducation={setAddEducation}
            />
          ) : null
        ) : null}
      </div> */}
      {/* <div className="experience-wrapper">
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
      </div> */}
    </div>
  );
}
