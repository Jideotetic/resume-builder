export default function EducationsForm() {
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
        />
        <br />
        <label htmlFor="degree">Degree</label>
        <br />
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Enter Degree / Field of Study"
        />
        <br />
        <label htmlFor="start-date">Start Date</label>
        <br />
        <input type="month" name="start-date" id="start-date" />
        <br />
        <label htmlFor="end-date">End Date</label>
        <br />
        <input type="month" name="end-date" id="end-date" />
        <br />
        <label htmlFor="location">Location</label> <small>(Optional)</small>
        <br />
        <input type="text" name="location" id="location" />
      </fieldset>
    </>
  );
}
