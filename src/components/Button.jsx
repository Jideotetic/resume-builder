import '../styles/Button.css';

export default function Button({ status, setStatus, name }) {
  function handleButtonClick() {
    status === '' && name === 'Create Resume'
      ? setStatus('creating')
      : status === 'creating' && name === 'Go Back'
      ? setStatus('')
      : status === 'previewing' && name === 'Go Back'
      ? setStatus('creating')
      : status === 'creating' && name === 'Preview Resume'
      ? setStatus('previewing')
      : null;
  }
  return <button onClick={handleButtonClick}>{name}</button>;
}
