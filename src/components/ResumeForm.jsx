import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import PersonalDetails from './PersonalDetails';
import EducationForm from './EducationForm';
import Educations from './Educations';
import EditEducation from './EditEducation';
import ExperienceForm from './ExperienceForm';
import Experience from './Experience';
import EditExperience from './EditExperience';
import Button from './Button';
import personalDetailsIcon from '../assets/user-solid.svg';
import angleUp from '../assets/angle-up-solid.svg';
import angleDown from '../assets/angle-down-solid.svg';
import educationsIcon from '../assets/user-graduate-solid.svg';
import experienceIcon from '../assets/briefcase-solid.svg';
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
  showExperience,
  setShowExperience,
  addExperience,
  setAddExperience,
  editExperience,
  setEditExperience,
}) {
  const [selectedEducationId, setSelectedEducationId] = useState(0);
  const [selectedExperienceId, setSelectedExperienceId] = useState(0);

  function handleShowPersonalDetails() {
    setShowPersonalDetails(!showPersonalDetails);
  }

  function handleShowEducations() {
    setShowEducations(!showEducations);
  }

  function handleShowExperience() {
    setShowExperience(!showExperience);
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
          {showPersonalDetails ? (
            <img
              className="hide-personal-details"
              src={angleUp}
              alt="icon"
              onClick={handleShowPersonalDetails}
            />
          ) : (
            <img
              className="show-personal-details"
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
      <div className="experience-wrapper">
        <div className="experience-header">
          <div className="experience-title">
            <img className="experience-icon" src={experienceIcon} alt="Icon" />
            <h2>Experience</h2>
          </div>
          {showExperience ? (
            <img
              className="hide-experiences"
              src={angleUp}
              alt="icon"
              onClick={handleShowExperience}
            />
          ) : (
            <img
              className="show-experiences"
              src={angleDown}
              alt="icon"
              onClick={handleShowExperience}
            />
          )}
        </div>
        {showExperience ? (
          addExperience ? (
            <ExperienceForm
              value={value}
              setValue={setValue}
              addExperience={addExperience}
              setAddExperience={setAddExperience}
            />
          ) : editExperience ? (
            <EditExperience
              value={value}
              setValue={setValue}
              editExperience={editExperience}
              setEditExperience={setEditExperience}
              selectedExperienceId={selectedExperienceId}
            />
          ) : (
            <>
              {value.experience.map((experience) => {
                return (
                  <Experience
                    key={experience.id}
                    id={experience.id}
                    experience={experience}
                    selectedExperienceId={selectedExperienceId}
                    setSelectedExperienceId={setSelectedExperienceId}
                    editExperience={editExperience}
                    setEditExperience={setEditExperience}
                    showExperience={showExperience}
                    value={value}
                    setValue={setValue}
                  />
                );
              })}

              <Button
                name="Add Experience"
                addExperience={addExperience}
                setAddExperience={setAddExperience}
              />
            </>
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
            <EducationForm
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
    </div>
  );
}
