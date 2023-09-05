import Button from './Button';

export default function EducationsForm({
  value,
  setValue,
  edit,
  setEdit,
  revealEducations,
  addEducation,
  setAddEducation,
}) {
  function handleSchoolChange(e) {
    setValue({
      ...value,
      education: {
        ...value.education,
        school: e.target.value,
      },
    });
  }

  function handleDegreeChange(e) {
    setValue({
      ...value,
      education: {
        ...value.education,
        degree: e.target.value,
      },
    });
  }

  function handleStartDateChange(e) {
    setValue({
      ...value,
      education: {
        ...value.education,
        startDate: e.target.value,
      },
    });
  }

  function handleEndDateChange(e) {
    setValue({
      ...value,
      education: {
        ...value.education,
        endDate: e.target.value,
      },
    });
  }

  function handleLocationChange(e) {
    setValue({
      ...value,
      education: {
        ...value.education,
        location: e.target.value,
      },
    });
  }

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
          value={value.education.school}
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
          value={value.education.degree}
          onChange={handleDegreeChange}
        />
        <br />
        <label htmlFor="start-date">Start Date</label>
        <br />
        <input
          type="month"
          name="start-date"
          id="start-date"
          value={value.education.startDate}
          onChange={handleStartDateChange}
        />
        <br />
        <label htmlFor="end-date">End Date</label>
        <br />
        <input
          type="month"
          name="end-date"
          id="end-date"
          value={value.education.endDate}
          onChange={handleEndDateChange}
        />
        <br />
        <label htmlFor="location">Location</label> <small>(Optional)</small>
        <br />
        <input
          type="text"
          name="location"
          id="location"
          value={value.education.location}
          onChange={handleLocationChange}
        />
        <br />
        <br />
        <div className="button-container">
          <Button
            name="Save"
            value={value}
            setValue={setValue}
            edit={edit}
            setEdit={setEdit}
            revealEducations={revealEducations}
            addEducation={addEducation}
            setAddEducation={setAddEducation}
          />
          <Button
            value={value}
            setValue={setValue}
            edit={edit}
            setEdit={setEdit}
            revealEducations={revealEducations}
            addEducation={addEducation}
            setAddEducation={setAddEducation}
            name="Cancel"
          />
        </div>
      </fieldset>
    </>
  );
}
