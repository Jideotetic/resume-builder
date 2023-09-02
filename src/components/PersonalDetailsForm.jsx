export default function PersonalDetailsForm() {
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
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <br />
        <label htmlFor="phone-number">Phone Number</label>
        <br />
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="Enter Your Phone Number"
        />
        <br />
        <label htmlFor="home-address">Location</label>
        <input
          type="text"
          id="home-address"
          name="home-address"
          placeholder="Enter Your Address"
        />
        <label htmlFor="career-summary">Career Summary</label>
        <textarea id="career-summary" name="career-summary" rows="5"></textarea>
      </fieldset>
    </>
  );
}
