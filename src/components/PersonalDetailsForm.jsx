import Button from './Button';

export default function PersonalDetailsForm({
  value,
  setValue,
  editPersonalDetails,
  setEditPersonalDetails,
}) {
  function handleNameChange(e) {
    setValue({
      ...value,
      name: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setValue({
      ...value,
      email: e.target.value,
    });
  }

  function handlePhoneNumberChange(e) {
    setValue({
      ...value,
      phoneNumber: e.target.value,
    });
  }

  function handleHomeAddressChange(e) {
    setValue({
      ...value,
      homeAddress: e.target.value,
    });
  }

  function handleCareerSummaryChange(e) {
    setValue({
      ...value,
      careerSummary: e.target.value,
    });
  }

  const isActive =
    !value.name ||
    !value.email ||
    !value.phoneNumber ||
    !value.homeAddress ||
    !value.careerSummary;

  return (
    <>
      <fieldset>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={value.name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={value.email}
          placeholder="Enter Your Email"
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="phone-number">Phone Number</label>
        <br />
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="Enter Your Phone Number"
          value={value.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <br />
        <label htmlFor="home-address">Location</label>
        <input
          type="text"
          id="home-address"
          name="home-address"
          placeholder="Enter Your Address"
          value={value.homeAddress}
          onChange={handleHomeAddressChange}
        />
        <label htmlFor="career-summary">Career Summary</label>
        <textarea
          id="career-summary"
          name="career-summary"
          rows="5"
          value={value.careerSummary}
          onChange={handleCareerSummaryChange}></textarea>
        <br />
        <br />
        <div className="button-container">
          <Button
            name="Save"
            isActive={isActive}
            value={value}
            setValue={setValue}
            editPersonalDetails={editPersonalDetails}
            setEditPersonalDetails={setEditPersonalDetails}
          />
          <Button
            name="Cancel"
            value={value}
            setValue={setValue}
            editPersonalDetails={editPersonalDetails}
            setEditPersonalDetails={setEditPersonalDetails}
          />
          <Button
            name="Clear"
            value={value}
            setValue={setValue}
            editPersonalDetails={editPersonalDetails}
            setEditPersonalDetails={setEditPersonalDetails}
          />
        </div>
      </fieldset>
    </>
  );
}
