export default function ExperienceForm() {
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
        />
        <br />
        <label htmlFor="position-title">Position Title</label>
        <br />
        <input
          type="text"
          name="position-title"
          id="position-title"
          placeholder="Enter Position Title"
        />
        <br />
        <label htmlFor="start-date">Start Date</label>
        <br />
        <input type="month" name="" id="" />
        <br />
        <label htmlFor="end-date">End Date</label>
        <br />
        <input type="month" name="end-date" id="end-date" />
        <br />
        <label htmlFor="location">Location</label> <small>(Optional)</small>
        <br />
        <input type="text" name="location" id="location" />
        <br />
        <label htmlFor="description">Description</label>
        <small>(Optional)</small>
        <br />
        <textarea name="description" id="description" rows="5"></textarea>
        <br />
        <br />
        <button type="button">Save</button>
      </fieldset>
    </>
  );
}
