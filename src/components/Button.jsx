import '../styles/Button.css';

export default function Button({
  name,
  status,
  setStatus,
  value,
  setValue,
  isActive,
  editPersonalDetails,
  setEditPersonalDetails,
  addEducation,
  setAddEducation,
  editEducation,
  setEditEducation,
  showPersonalDetails,
  showEducations,
  showExperience,
  editExperience,
  setSelectedEducationId,
  selectedEducationId,
  id,
  education,
  experience,
  addExperience,
  setAddExperience,
  setEditExperience,
  setSelectedExperienceId,
  selectedExperienceId,
}) {
  function handleButtonClick() {
    if (status === '' && name === 'Create Resume') {
      setStatus('creating');
    } else if (status === 'creating' && name === 'Go Back') {
      setStatus('');
    } else if (status === 'previewing' && name === 'Go Back') {
      setStatus('creating');
    } else if (status === 'creating' && name === 'Preview Resume') {
      setStatus('previewing');
    } else if (showPersonalDetails && !editPersonalDetails && name === 'Edit') {
      setEditPersonalDetails(!editPersonalDetails);
    } else if (editPersonalDetails && name === 'Save') {
      setValue({
        ...value,
        personalDetails: {
          ...value.personalDetails,
          name: value.name,
          email: value.email,
          phoneNumber: value.phoneNumber,
          homeAddress: value.homeAddress,
          careerSummary: value.careerSummary,
        },
      });
      setEditPersonalDetails(!editPersonalDetails);
    } else if (editPersonalDetails && name === 'Cancel') {
      setValue({
        ...value,
        name: value.personalDetails.name,
        email: value.personalDetails.email,
        phoneNumber: value.personalDetails.phoneNumber,
        homeAddress: value.personalDetails.homeAddress,
        careerSummary: value.personalDetails.careerSummary,
      });
      setEditPersonalDetails(!editPersonalDetails);
    } else if (editPersonalDetails && name === 'Clear') {
      setValue({
        ...value,
        name: '',
        email: '',
        phoneNumber: '',
        homeAddress: '',
        careerSummary: '',
      });
    } else if (!addEducation && name === 'Add Education') {
      setAddEducation(!addEducation);
    } else if (addEducation && name === 'Save') {
      setValue({
        ...value,
        educations: [
          ...value.educations,
          {
            id: value.educations.length,
            school: value.school,
            degree: value.degree,
            schoolStartDate: value.schoolStartDate,
            schoolEndDate: value.schoolEndDate,
            schoolLocation: value.schoolLocation,
          },
        ],
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolLocation: '',
      });
      setAddEducation(!addEducation);
    } else if (addEducation && name === 'Cancel') {
      setValue({
        ...value,
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolLocation: '',
      });
      setAddEducation(!addEducation);
    } else if (addEducation && name === 'Clear') {
      setValue({
        ...value,
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolLocation: '',
      });
    } else if (showEducations && !editEducation && name === 'Edit') {
      setSelectedEducationId(id);
      setValue({
        ...value,
        school: value.educations[selectedEducationId].school,
        degree: value.educations[selectedEducationId].degree,
        schoolStartDate: value.educations[selectedEducationId].schoolStartDate,
        schoolEndDate: value.educations[selectedEducationId].schoolEndDate,
        schoolLocation: value.educations[selectedEducationId].schoolLocation,
      });
      setEditEducation(!editEducation);
    } else if (editEducation && name === 'Save') {
      setValue({
        ...value,
        educations: [
          {
            ...value.educations[selectedEducationId],
            id: selectedEducationId,
            school: value.school,
            degree: value.degree,
            schoolStartDate: value.schoolStartDate,
            schoolEndDate: value.schoolEndDate,
            schoolLocation: value.schoolLocation,
          },
        ],
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolLocation: '',
      });
      setEditEducation(!editEducation);
    } else if (editEducation && name === 'Cancel') {
      setValue({
        ...value,
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolLocation: '',
      });
      setEditEducation(!editEducation);
    } else if (editEducation && name === 'Clear') {
      setValue({
        ...value,
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolLocation: '',
      });
    } else if (!editEducation && showEducations && name === 'Delete') {
      setSelectedEducationId(id);
      setValue({
        ...value,
        educations: value.educations.filter((e) => {
          e.id !== education.selectedEducationId;
        }),
      });
    } else if (!addExperience && name === 'Add Experience') {
      setAddExperience(!addExperience);
    } else if (addExperience && name === 'Save') {
      setValue({
        ...value,
        experience: [
          ...value.experience,
          {
            id: value.experience.length,
            company: value.company,
            position: value.position,
            companyStartDate: value.companyStartDate,
            companyEndDate: value.companyEndDate,
            companyLocation: value.companyLocation,
            jobDescription: value.jobDescription,
          },
        ],
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyLocation: '',
        jobDescription: '',
      });
      setAddExperience(!addExperience);
    } else if (addExperience && name === 'Cancel') {
      setValue({
        ...value,
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyLocation: '',
        jobDescription: '',
      });
      setAddExperience(!addExperience);
    } else if (addExperience && name === 'Clear') {
      setValue({
        ...value,
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyLocation: '',
        jobDescription: '',
      });
    } else if (showExperience && !editExperience && name === 'Edit') {
      setSelectedExperienceId(id);
      setValue({
        ...value,
        company: value.experience[selectedExperienceId].company,
        position: value.experience[selectedExperienceId].position,
        companyStartDate:
          value.experience[selectedExperienceId].companyStartDate,
        companyEndDate: value.experience[selectedExperienceId].companyEndDate,
        companyLocation: value.experience[selectedExperienceId].companyLocation,
      });
      setEditExperience(!editExperience);
    } else if (editExperience && name === 'Save') {
      setValue({
        ...value,
        experience: [
          {
            ...value.experience[selectedExperienceId],
            id: selectedExperienceId,
            company: value.company,
            position: value.position,
            companyStartDate: value.companyStartDate,
            companyEndDate: value.companyEndDate,
            companyLocation: value.companyLocation,
            jobDescription: value.jobDescription,
          },
        ],
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyLocation: '',
        jobDescription: '',
      });
      setEditExperience(!editExperience);
    } else if (editExperience && name === 'Cancel') {
      setValue({
        ...value,
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyLocation: '',
        jobDescription: '',
      });
      setEditExperience(!editExperience);
    } else if (editExperience && name === 'Clear') {
      setValue({
        ...value,
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyLocation: '',
        jobDescription: '',
      });
    } else if (!editExperience && showExperience && name === 'Delete') {
      setSelectedExperienceId(id);
      setValue({
        ...value,
        experience: value.experience.filter((e) => {
          e.id !== experience.selectedExperienceId;
        }),
      });
    }
  }

  function splitName(name) {
    return name.split(' ').join('-').toLowerCase();
  }

  return (
    <button
      disabled={isActive}
      className={`${splitName(name)}-button`}
      onClick={handleButtonClick}>
      {name}
    </button>
  );
}
