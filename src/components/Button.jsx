import '../styles/Button.css';

export default function Button({
  status,
  setStatus,
  name,
  editPersonalDetails,
  setEditPersonalDetails,
}) {
  function handleButtonClick() {
    status === '' && name === 'Create Resume'
      ? setStatus('creating')
      : status === 'creating' && name === 'Go Back'
      ? setStatus('')
      : status === 'previewing' && name === 'Go Back'
      ? setStatus('creating')
      : status === 'creating' && name === 'Preview Resume'
      ? setStatus('previewing')
      : !editPersonalDetails
      ? setEditPersonalDetails(!editPersonalDetails)
      : editPersonalDetails
      ? setEditPersonalDetails(!editPersonalDetails)
      : null;
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
