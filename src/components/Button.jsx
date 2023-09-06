import '../styles/Button.css';

export default function Button({
  value,
  setValue,
  status,
  setStatus,
  name,
  editPersonalDetails,
  setEditPersonalDetails,
  revealPersonalDetails,
  revealEducations,
  addEducation,
  setAddEducation,
  editEducation,
  setEditEducation,
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
    } else if (!editPersonalDetails && name === 'Edit') {
      setEditPersonalDetails(!editPersonalDetails);
    } else if (editPersonalDetails && name === 'Save') {
      setEditPersonalDetails(!editPersonalDetails);
    }
    //   else if (!edit && name === 'Edit' && revealPersonalDetails) {
    //     setEdit(!edit);
    //   } else if (edit && name === 'Save' && revealPersonalDetails) {
    //     setEdit(!edit);
    //   } else if (!addEducation && name === 'Add Education' && revealEducations) {
    //     setAddEducation(!addEducation);
    //   } else if (addEducation && name === 'Save' && revealEducations) {
    //     setAddEducation(!addEducation);
    //     value.educations.push(value.education);
    //     setValue({
    //       ...value,
    //       education: {
    //         ...value.education,
    //         school: '',
    //         degree: '',
    //         startDate: '',
    //         endDate: '',
    //         location: '',
    //       },
    //     });
    //   } else if (addEducation && name === 'Cancel' && revealEducations) {
    //     setAddEducation(!addEducation);
    //   } else if (editEducation && name === 'Edit' && revealEducations) {
    //     setEditEducation(!editEducation);
    //   } else if (!editEducation && name === 'Save' && revealEducations) {
    //     setEditEducation(!editEducation);
    //   }
  }

  function splitName(name) {
    return name.split(' ').join('-').toLowerCase();
  }

  return (
    <button className={`${splitName(name)}-button`} onClick={handleButtonClick}>
      {name}
    </button>
  );
}
