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
      schoolStartDate: e.target.value,
    });
  }

  function handleEndDateChange(e) {
    setValue({
      ...value,
      schoolEndDate: e.target.value,
    });
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
      <label htmlFor="start-date">Start Date</label>
      <br />
      <input
        type="month"
        name="start-date"
        id="start-date"
        value={value.schoolStartDate}
        onChange={handleStartDateChange}
      />
      <br />
      <label htmlFor="end-date">End Date</label>
      <br />
      <input
        type="month"
        name="end-date"
        id="end-date"
        value={value.schoolEndDate}
        onChange={handleEndDateChange}
      />
      <br />
      <label htmlFor="location">Location</label>
      <br />
      <input
        type="text"
        name="location"
        id="location"
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
  );
}
