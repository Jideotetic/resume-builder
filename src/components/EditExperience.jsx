import Button from './Button';

export default function ExperienceForm({
  value,
  setValue,
  selectedExperienceId,
  editExperience,
  setEditExperience,
  companyTillDateActive,
  setCompanyTillDateActive,
}) {
  function handleCompanyChange(e) {
    setValue({
      ...value,
      company: e.target.value,
    });
  }

  function handlePositionChange(e) {
    setValue({
      ...value,
      position: e.target.value,
    });
  }

  function handleCompanyStartDateChange(e) {
    setValue({
      ...value,
      companyStartDate: e.target.value,
    });
  }

  function handleCompanyEndDateChange(e) {
    setValue({
      ...value,
      companyEndDate: e.target.value,
    });
  }

  function handleCompanyTillDateActiveChange(e) {
    setCompanyTillDateActive(e.target.checked);
  }

  function handleCompanyLocationChange(e) {
    setValue({
      ...value,
      companyLocation: e.target.value,
    });
  }

  function handleJobDescriptionChange(e) {
    setValue({
      ...value,
      jobDescription: e.target.value,
    });
  }

  const isActive =
    !value.company ||
    !value.position ||
    !value.companyStartDate ||
    (!companyTillDateActive && !value.companyEndDate) ||
    !value.companyLocation ||
    !value.jobDescription;

  return (
    <>
      <fieldset>
        <label htmlFor="company-name">Company Name</label>
        <br />
        <input
          type="text"
          name="company-name"
          id="company-name"
          placeholder="Enter Company Name"
          value={value.company}
          onChange={handleCompanyChange}
        />
        <br />
        <label htmlFor="position-title">Position Title</label>
        <br />
        <input
          type="text"
          name="position-title"
          id="position-title"
          placeholder="Enter Position Title"
          value={value.position}
          onChange={handlePositionChange}
        />
        <br />
        <label htmlFor="company-start-date">Start Date</label>
        <br />
        <input
          type="date"
          name="company-start-date"
          id="company-start-date"
          value={value.companyStartDate}
          onChange={handleCompanyStartDateChange}
        />
        <br />
        <label htmlFor="company-end-date">End Date</label>
        <br />
        <input
          type="date"
          name="company-end-date"
          id="company-end-date"
          value={value.companyEndDate}
          onChange={handleCompanyEndDateChange}
          disabled={companyTillDateActive}
        />
        <br />
        <input
          type="checkbox"
          name="company-till-date"
          id="company-till-date"
          checked={companyTillDateActive}
          onChange={handleCompanyTillDateActiveChange}
        />
        <label htmlFor="company-till-date">Still work here</label>
        <br />
        <label htmlFor="company-location">Location</label>
        <br />
        <input
          type="text"
          name="company-location"
          id="company-location"
          value={value.companyLocation}
          onChange={handleCompanyLocationChange}
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          name="description"
          id="description"
          rows="5"
          value={value.jobDescription}
          onChange={handleJobDescriptionChange}
          placeholder="Enter Your Job Description"></textarea>
        <br />
        <br />
        <div className="button-container">
          <Button
            name="Save"
            value={value}
            isActive={isActive}
            setValue={setValue}
            editExperience={editExperience}
            setEditExperience={setEditExperience}
            selectedExperienceId={selectedExperienceId}
            companyTillDateActive={companyTillDateActive}
            setCompanyTillDateActive={setCompanyTillDateActive}
          />
          <Button
            name="Cancel"
            value={value}
            setValue={setValue}
            editExperience={editExperience}
            setEditExperience={setEditExperience}
            setCompanyTillDateActive={setCompanyTillDateActive}
            companyTillDateActive={companyTillDateActive}
          />
          <Button
            name="Clear"
            value={value}
            setValue={setValue}
            editExperience={editExperience}
            setCompanyTillDateActive={setCompanyTillDateActive}
            companyTillDateActive={companyTillDateActive}
          />
        </div>
      </fieldset>
    </>
  );
}
