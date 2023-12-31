import { getMonthName, getMonthNumber, splitName } from '../customHooks';
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
  schoolTillDateActive,
  setSchoolTillDateActive,
  companyTillDateActive,
  setCompanyTillDateActive,
}) {
  function handleButtonClick() {
    if (status === '' && name === 'Create Resume') {
      setStatus('creating');
    } else if (status === 'creating' && name === 'Back') {
      setStatus('');
    } else if (status === 'previewing' && name === 'Back') {
      setStatus('creating');
    } else if (status === 'creating' && name === 'Preview') {
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
            companyStartDate: `${
              value.companyStartDate.split('-')[0]
            }-${getMonthName(value.companyStartDate.split('-')[1])}-${
              value.companyStartDate.split('-')[2]
            }`,
            companyEndDate: `${
              companyTillDateActive
                ? 'Till Date'
                : `${value.companyEndDate.split('-')[0]}-${getMonthName(
                    value.companyEndDate.split('-')[1]
                  )}-${value.companyEndDate.split('-')[2]}`
            }`,
            companyTillDate: companyTillDateActive,
            companyLocation: value.companyLocation,
            jobDescription: value.jobDescription,
          },
        ],
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyTillDate: companyTillDateActive
          ? setCompanyTillDateActive(!companyTillDateActive)
          : null,
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
        companyTillDate: companyTillDateActive,
        companyLocation: '',
        jobDescription: '',
      });
      if (companyTillDateActive) {
        setCompanyTillDateActive(!companyTillDateActive);
      }
      setAddExperience(!addExperience);
    } else if (addExperience && name === 'Clear') {
      setValue({
        ...value,
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyTillDate: companyTillDateActive,
        companyLocation: '',
        jobDescription: '',
      });
      if (!companyTillDateActive) {
        return;
      } else {
        setCompanyTillDateActive(!companyTillDateActive);
      }
    } else if (showExperience && !editExperience && name === 'Edit') {
      setSelectedExperienceId(id);
      setValue({
        ...value,
        company: value.experience[id].company,
        position: value.experience[id].position,
        companyStartDate: `${
          value.experience[id].companyStartDate.split('-')[0]
        }-${getMonthNumber(value.experience[id].companyStartDate.split('-')[1])
          .toString()
          .padStart(2, '0')}-${
          value.experience[id].companyStartDate.split('-')[2]
        }`,
        companyEndDate: `${
          value.experience[id].companyTillDate
            ? ''
            : `${
                value.experience[id].companyEndDate.split('-')[0]
              }-${getMonthNumber(
                value.experience[id].companyEndDate.split('-')[1]
              )
                .toString()
                .padStart(2, '0')}-${
                value.experience[id].companyStartDate.split('-')[2]
              }`
        }`,

        companyTillDate: value.experience[id].companyTillDate,
        companyLocation: value.experience[id].companyLocation,
        jobDescription: value.experience[id].jobDescription,
      });
      if (value.experience[id].companyTillDate) {
        setCompanyTillDateActive(!companyTillDateActive);
      }
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
            companyStartDate: `${
              value.companyStartDate.split('-')[0]
            }-${getMonthName(value.companyStartDate.split('-')[1])}-${
              value.companyStartDate.split('-')[2]
            }`,
            companyEndDate: `${
              companyTillDateActive
                ? 'Till Date'
                : `${value.companyEndDate.split('-')[0]}-${getMonthName(
                    value.companyEndDate.split('-')[1]
                  )}-${value.companyEndDate.split('-')[2]}`
            }`,
            companyTillDate: companyTillDateActive,
            companyLocation: value.companyLocation,
            jobDescription: value.jobDescription,
          },
        ],
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyTillDate: companyTillDateActive
          ? setCompanyTillDateActive(!companyTillDateActive)
          : null,
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
        companyTillDate: companyTillDateActive,
        companyLocation: '',
        jobDescription: '',
      });
      if (companyTillDateActive) {
        setCompanyTillDateActive(!companyTillDateActive);
      }
      setEditExperience(!editExperience);
    } else if (editExperience && name === 'Clear') {
      setValue({
        ...value,
        company: '',
        position: '',
        companyStartDate: '',
        companyEndDate: '',
        companyTillDate: companyTillDateActive,
        companyLocation: '',
        jobDescription: '',
      });
      if (!companyTillDateActive) {
        return;
      } else {
        setCompanyTillDateActive(!companyTillDateActive);
      }
    } else if (!editExperience && showExperience && name === 'Delete') {
      setValue({
        ...value,
        experience: value.experience.filter((e) => e.id !== id),
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
            schoolStartDate: `${
              value.schoolStartDate.split('-')[0]
            }-${getMonthName(value.schoolStartDate.split('-')[1])}-${
              value.schoolStartDate.split('-')[2]
            }`,
            schoolEndDate: `${
              schoolTillDateActive
                ? 'Till Date'
                : `${value.schoolEndDate.split('-')[0]}-${getMonthName(
                    value.schoolEndDate.split('-')[1]
                  )}-${value.schoolEndDate.split('-')[2]}`
            }`,
            schoolTillDate: schoolTillDateActive,
            schoolLocation: value.schoolLocation,
          },
        ],
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolTillDate: schoolTillDateActive
          ? setSchoolTillDateActive(!schoolTillDateActive)
          : null,
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
        schoolTillDate: schoolTillDateActive,
        schoolLocation: '',
      });
      if (schoolTillDateActive) {
        setSchoolTillDateActive(!schoolTillDateActive);
      }
      setAddEducation(!addEducation);
    } else if (addEducation && name === 'Clear') {
      setValue({
        ...value,
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolTillDate: schoolTillDateActive,
        schoolLocation: '',
      });
      if (!schoolTillDateActive) {
        return;
      } else {
        setSchoolTillDateActive(!schoolTillDateActive);
      }
    } else if (showEducations && !editEducation && name === 'Edit') {
      setSelectedEducationId(id);
      setValue({
        ...value,
        school: value.educations[id].school,
        degree: value.educations[id].degree,
        schoolStartDate: `${
          value.educations[id].schoolStartDate.split('-')[0]
        }-${getMonthNumber(value.educations[id].schoolStartDate.split('-')[1])
          .toString()
          .padStart(2, '0')}-${
          value.educations[id].schoolStartDate.split('-')[2]
        }`,
        schoolEndDate: `${
          value.educations[id].schoolTillDate
            ? ''
            : `${
                value.educations[id].schoolEndDate.split('-')[0]
              }-${getMonthNumber(
                value.educations[id].schoolEndDate.split('-')[1]
              )
                .toString()
                .padStart(2, '0')}-${
                value.educations[id].schoolEndDate.split('-')[2]
              }`
        }`,

        schoolTillDate: value.educations[id].schoolTillDate,
        schoolLocation: value.educations[id].schoolLocation,
      });
      if (value.educations[id].schoolTillDate) {
        setSchoolTillDateActive(!schoolTillDateActive);
      }
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
            schoolStartDate: `${
              value.schoolStartDate.split('-')[0]
            }-${getMonthName(value.schoolStartDate.split('-')[1])}-${
              value.schoolStartDate.split('-')[2]
            }`,
            schoolEndDate: `${
              schoolTillDateActive
                ? 'Till Date'
                : `${value.schoolEndDate.split('-')[0]}-${getMonthName(
                    value.schoolEndDate.split('-')[1]
                  )}-${value.schoolEndDate.split('-')[2]}`
            }`,
            schoolTillDate: schoolTillDateActive,
            schoolLocation: value.schoolLocation,
          },
        ],
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolTillDate: schoolTillDateActive
          ? setSchoolTillDateActive(!schoolTillDateActive)
          : null,
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
        schoolTillDate: schoolTillDateActive,
        schoolLocation: '',
      });
      if (schoolTillDateActive) {
        setSchoolTillDateActive(!schoolTillDateActive);
      }
      setEditEducation(!editEducation);
    } else if (editEducation && name === 'Clear') {
      setValue({
        ...value,
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
        schoolTillDate: schoolTillDateActive,
        schoolLocation: '',
      });
      if (!schoolTillDateActive) {
        return;
      } else {
        setSchoolTillDateActive(!schoolTillDateActive);
      }
    } else if (!editEducation && showEducations && name === 'Delete') {
      setValue({
        ...value,
        educations: value.educations.filter((e) => e.id !== id),
      });
    } else if (name === 'Download') {
      alert('Coming Soon...');
    }
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
