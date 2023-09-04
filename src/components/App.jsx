import { useState, useEffect } from 'react';
import Favicon from './Favicon';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Button from './Button';
import ResumeForm from './ResumeForm';
import ResumeContainer from './ResumeContainer';
import '../styles/App.css';

function App() {
  /**
   * status variable to track the state of the application
   * width variable to handle responsiveness
   */
  const [status, setStatus] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [revealPersonalDetails, setRevealPersonalDetails] = useState(false);
  const [revealEducations, setRevealEducations] = useState(false);
  const [revealExperience, setRevealExperience] = useState(false);
  const [editPersonalDetails, setEditPersonalDetails] = useState(false);
  const [value, setValue] = useState({
    name: 'Abdulbasit Yusuf',
    email: 'jideotetic@gmail.com',
    phoneNumber: '09014349835',
    homeAddress: 'Lagos, Nigeria',
    careerSummary: `I’m a highly motivated Front-end developer highly invested in building responsive user interfaces and accessible websites. With strong background in semantic HTML, CSS, and JavaScript, I get my motivations from being able to develop websites with big part of accessibility in mind, when I use accessibility tools on websites I built and it works correctly, I feel fulfilled and motivated to do more. I have 1 year of experience in training and have built a lot of projects HTML5, CSS3, JavaScript, Git & GitHub with incredible ease of adaptation and learning new technologies as need be.`,
    education: {},
    experience: {},
  });

  /**
   * Desktop break point
   */
  const breakPoint = 768;

  /**
   * different states of the application
   */
  const createResume = status === 'creating';
  const previewResume = status === 'previewing';

  useEffect(() => {
    const handleWindowResize = () => {
      if (
        width >= breakPoint &&
        (revealPersonalDetails || revealEducations || revealExperience)
      ) {
        setRevealPersonalDetails(revealPersonalDetails);
        setRevealEducations(revealEducations);
        setRevealExperience(revealExperience);
      }
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [revealPersonalDetails, width, revealEducations, revealExperience]);

  return (
    <>
      <Favicon />
      <Header />
      <Main status={status} width={width} breakPoint={breakPoint}>
        {createResume ? (
          width >= breakPoint ? (
            <>
              <div className="button-container">
                <Button status={status} setStatus={setStatus} name="Go Back" />
                <Button name="Download" />
              </div>
              <ResumeForm
                value={value}
                setValue={setValue}
                createResume={createResume}
                revealPersonalDetails={revealPersonalDetails}
                setRevealPersonalDetails={setRevealPersonalDetails}
                revealEducations={revealEducations}
                setRevealEducations={setRevealEducations}
                revealExperience={revealExperience}
                setRevealExperience={setRevealExperience}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
              />
              <ResumeContainer value={value} />
            </>
          ) : (
            <>
              <ResumeForm
                value={value}
                setValue={setValue}
                createResume={createResume}
                revealPersonalDetails={revealPersonalDetails}
                setRevealPersonalDetails={setRevealPersonalDetails}
                revealEducations={revealEducations}
                setRevealEducations={setRevealEducations}
                revealExperience={revealExperience}
                setRevealExperience={setRevealExperience}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
              />
              <div className="button-container">
                <Button status={status} setStatus={setStatus} name="Go Back" />
                <Button
                  status={status}
                  setStatus={setStatus}
                  name="Preview Resume"
                />
              </div>
            </>
          )
        ) : previewResume ? (
          width >= breakPoint ? (
            <>
              <div className="button-container">
                <Button status={status} setStatus={setStatus} name="Go Back" />
                <Button name="Download" />
              </div>
              <ResumeForm
                value={value}
                setValue={setValue}
                createResume={createResume}
                revealPersonalDetails={revealPersonalDetails}
                setRevealPersonalDetails={setRevealPersonalDetails}
                revealEducations={revealEducations}
                setRevealEducations={setRevealEducations}
                revealExperience={revealExperience}
                setRevealExperience={setRevealExperience}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
              />
              <ResumeContainer value={value} />
            </>
          ) : (
            <>
              <ResumeContainer value={value} />
              <div className="button-container">
                <Button status={status} setStatus={setStatus} name="Go Back" />
                <Button name="Download" />
              </div>
            </>
          )
        ) : (
          <Button status={status} setStatus={setStatus} name="Create Resume" />
        )}
      </Main>
      <Footer />
    </>
  );
}

export default App;
