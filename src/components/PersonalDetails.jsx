import Button from './Button';
import '../styles/PersonalDetails.css';

export default function PersonalDetails({
  value,
  editPersonalDetails,
  setEditPersonalDetails,
}) {
  return (
    <>
      <div className="personal-details">
        <div className="personal-details-content">
          <p>{value.name.toUpperCase()}</p>
          <p>{value.email.toUpperCase()}</p>
          <p>{value.phoneNumber}</p>
          <p>{value.homeAddress}</p>
        </div>
        <Button
          name="Edit"
          editPersonalDetails={editPersonalDetails}
          setEditPersonalDetails={setEditPersonalDetails}
        />
      </div>
    </>
  );
}
