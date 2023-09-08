import '../styles/Button.css';

export default function Button({
  status,
  setStatus,
  name,
  value,
  setValue,
  editPersonalDetails,
  setEditPersonalDetails,
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
    }
  }

  function splitName(name) {
    return name.split(' ').join('-').toLowerCase();
  }

  return (
    <button
      disabled={
        name === 'Save' &&
        (!value.name ||
          !value.email ||
          !value.phoneNumber ||
          !value.homeAddress ||
          !value.careerSummary)
      }
      className={`${splitName(name)}-button`}
      onClick={handleButtonClick}>
      {name}
    </button>
  );
}
