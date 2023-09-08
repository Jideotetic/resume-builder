import '../styles/Button.css';

export default function Button({
  name,
  value,
  status,
  isActive,
  setValue,
  setStatus,
  addEducation,
  setAddEducation,
  editPersonalDetails,
  editEducation,
  setEditEducation,
  setEditPersonalDetails,
  showPersonalDetails,
  showEducations,
  setSelectedEducationId,
  selectedEducationId,
  id,
  education,
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
            startDate: value.startDate,
            endDate: value.endDate,
            schoolLocation: value.schoolLocation,
          },
        ],
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        schoolLocation: '',
      });
      setAddEducation(!addEducation);
    } else if (addEducation && name === 'Cancel') {
      setValue({
        ...value,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        schoolLocation: '',
      });
      setAddEducation(!addEducation);
    } else if (addEducation && name === 'Clear') {
      setValue({
        ...value,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        schoolLocation: '',
      });
    } else if (showEducations && !editEducation && name === 'Edit') {
      setSelectedEducationId(id);
      setValue({
        ...value,
        school: value.educations[selectedEducationId].school,
        degree: value.educations[selectedEducationId].degree,
        startDate: value.educations[selectedEducationId].startDate,
        endDate: value.educations[selectedEducationId].endDate,
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
            startDate: value.startDate,
            endDate: value.endDate,
            schoolLocation: value.schoolLocation,
          },
        ],
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        schoolLocation: '',
      });
      setEditEducation(!editEducation);
    } else if (editEducation && name === 'Cancel') {
      setValue({
        ...value,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        schoolLocation: '',
      });
      setEditEducation(!editEducation);
    } else if (editEducation && name === 'Clear') {
      setValue({
        ...value,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        schoolLocation: '',
      });
    } else if (!editEducation && name === 'Delete') {
      setSelectedEducationId(id);
      setValue({
        ...value,
        educations: value.educations.filter((e) => {
          e.id !== education.selectedEducationId;
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
