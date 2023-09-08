import Button from './Button';
import '../styles/PersonalDetails.css';

export default function PersonalDetails({
  value,
  setEditPersonalDetails,
  editPersonalDetails,
}) {
  return (
    <>
      <div className="personal-details">
        <div className="personal-details-content">
          <p>{value.personalDetails.name.toUpperCase()}</p>
          <p>{value.personalDetails.email.toUpperCase()}</p>
          <p>{value.personalDetails.phoneNumber}</p>
          <p>{value.personalDetails.homeAddress.toUpperCase()}</p>
        </div>
        <Button
          name="Edit"
          value={value}
          editPersonalDetails={editPersonalDetails}
          setEditPersonalDetails={setEditPersonalDetails}
        />
      </div>
    </>
  );
}
