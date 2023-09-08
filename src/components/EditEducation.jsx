import Button from './Button';

export default function EditEducation({
  value,
  setValue,
  editEducation,
  setEditEducation,
  selectedEducationId,
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
      startDate: e.target.value,
    });
  }

  function handleEndDateChange(e) {
    setValue({
      ...value,
      endDate: e.target.value,
    });
  }

  function handleLocationChange(e) {
    setValue({
      ...value,
      schoolLocation: e.target.value,
    });
  }

  const isActive =
    !value.school || !value.degree || !value.startDate || !value.endDate;

  return (
    <>
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
        <label htmlFor="start-date">Start Date</label>
        <br />
        <input
          type="month"
          name="start-date"
          id="start-date"
          value={value.startDate}
          onChange={handleStartDateChange}
        />
        <br />
        <label htmlFor="end-date">End Date</label>
        <br />
        <input
          type="month"
          name="end-date"
          id="end-date"
          value={value.endDate}
          onChange={handleEndDateChange}
        />
        <br />
        <label htmlFor="location">Location</label> <small>(Optional)</small>
        <br />
        <input
          type="text"
          name="location"
          id="location"
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
          />
          <Button
            name="Cancel"
            value={value}
            setValue={setValue}
            editEducation={editEducation}
            setEditEducation={setEditEducation}
          />
          <Button
            name="Clear"
            value={value}
            setValue={setValue}
            editEducation={editEducation}
          />
        </div>
      </fieldset>
    </>
  );
}
