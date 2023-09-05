import Button from './Button';

export default function PersonalDetails({
  value,
  edit,
  setEdit,
  revealPersonalDetails,
}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div>
          <p>{value.name.toUpperCase()}</p>
          <p>{value.email.toUpperCase()}</p>
          <p>{value.phoneNumber}</p>
          <p>{value.homeAddress}</p>
        </div>
        <Button
          name="Edit"
          edit={edit}
          setEdit={setEdit}
          revealPersonalDetails={revealPersonalDetails}
        />
      </div>
    </>
  );
}
