import Button from './Button';

export default function EditEducation({
  value,
  setValue,
  editEducation,
  setEditEducation,
  selectedEducationId,
  schoolTillDateActive,
  setSchoolTillDateActive,
}) {
  function handleSchoolChange(e) {
    setValue({
      ...value,
      school: e.target.value,
    });
  }

  function handleDegreeChange(e) {
    setValue({
      ...value,
      degree: e.target.value,
    });
  }

  function handleStartDateChange(e) {
    setValue({
      ...value,
      schoolStartDate: e.target.value,
    });
  }

  function handleEndDateChange(e) {
    setValue({
      ...value,
      schoolEndDate: e.target.value,
    });
  }

  function handleSchoolTillDateActiveChange(e) {
    setSchoolTillDateActive(e.target.checked);
  }

  function handleLocationChange(e) {
    setValue({
      ...value,
      schoolLocation: e.target.value,
    });
  }

  const isActive =
    !value.school ||
    !value.degree ||
    !value.schoolStartDate ||
    (!schoolTillDateActive && !value.schoolEndDate) ||
    !value.schoolLocation;

  return (
    <fieldset>
      <label htmlFor="school">School</label>
      <br />
      <input
        type="text"
        name="school"
        id="school"
        placeholder="Enter School / University"
        value={value.school}
        onChange={handleSchoolChange}
      />
      <br />
      <label htmlFor="degree">Degree</label>
      <br />
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Enter Degree / Field of Study"
        value={value.degree}
        onChange={handleDegreeChange}
      />
      <br />
      <label htmlFor="school-start-date">Start Date</label>
      <br />
      <input
        type="month"
        name="school-start-date"
        id="school-start-date"
        value={value.schoolStartDate}
        onChange={handleStartDateChange}
      />
      <br />
      <label htmlFor="school-end-date">End Date</label>
      <br />
      <input
        type="month"
        name="school-end-date"
        id="school-end-date"
        value={value.schoolEndDate}
        onChange={handleEndDateChange}
        disabled={schoolTillDateActive}
      />
      <br />
      <input
        type="checkbox"
        name="school-till-date"
        id="school-till-date"
        checked={schoolTillDateActive}
        onChange={handleSchoolTillDateActiveChange}
      />
      <label htmlFor="school-till-date">Still school here</label>
      <br />
      <label htmlFor="school-location">Location</label>
      <br />
      <input
        type="text"
        name="school-location"
        id="school-location"
        placeholder="Enter Your School Location"
        value={value.schoolLocation}
        onChange={handleLocationChange}
      />
      <br />
      <br />
      <div className="button-container">
        <Button
          name="Save"
          value={value}
          isActive={isActive}
          setValue={setValue}
          editEducation={editEducation}
          setEditEducation={setEditEducation}
          selectedEducationId={selectedEducationId}
          schoolTillDateActive={schoolTillDateActive}
          setSchoolTillDateActive={setSchoolTillDateActive}
        />
        <Button
          name="Cancel"
          value={value}
          setValue={setValue}
          editEducation={editEducation}
          setEditEducation={setEditEducation}
          schoolTillDateActive={schoolTillDateActive}
          setSchoolTillDateActive={setSchoolTillDateActive}
        />
        <Button
          name="Clear"
          value={value}
          setValue={setValue}
          editEducation={editEducation}
          schoolTillDateActive={schoolTillDateActive}
          setSchoolTillDateActive={setSchoolTillDateActive}
        />
      </div>
    </fieldset>
  );
}
