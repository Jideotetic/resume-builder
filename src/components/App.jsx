import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Favicon from './Favicon';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Button from './Button';
import ResumeForm from './ResumeForm';
import ResumeContainer from './ResumeContainer';
import '../styles/App.css';

export default function App() {
  /**
   * status variable to track the state of the application
   * width variable to handle responsiveness
   */
  const [status, setStatus] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [editPersonalDetails, setEditPersonalDetails] = useState(false);
  const [showEducations, setShowEducations] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  // const [revealExperience, setRevealExperience] = useState(false);
  const [value, setValue] = useState({
    name: 'Abdulbasit Yusuf',
    email: 'jideotetic@gmail.com',
    phoneNumber: '09014349835',
    homeAddress: 'Lagos, Nigeria',
    careerSummary: `I’m a highly motivated Front-end developer highly invested in building responsive user interfaces and accessible websites. With strong background in semantic HTML, CSS, and JavaScript, I get my motivations from being able to develop websites with big part of accessibility in mind, when I use accessibility tools on websites I built and it works correctly, I feel fulfilled and motivated to do more. I have 1 year of experience in training and have built a lot of projects HTML5, CSS3, JavaScript, Git & GitHub with incredible ease of adaptation and learning new technologies as need be.`,
    school: '',
    degree: '',
    company: '',
    startDate: '',
    endDate: '',
    schoolLocation: '',
    personalDetails: {
      name: 'Abdulbasit Yusuf',
      email: 'jideotetic@gmail.com',
      phoneNumber: '09014349835',
      homeAddress: 'Lagos, Nigeria',
      careerSummary: `I’m a highly motivated Front-end developer highly invested in building responsive user interfaces and accessible websites. With strong background in semantic HTML, CSS, and JavaScript, I get my motivations from being able to develop websites with big part of accessibility in mind, when I use accessibility tools on websites I built and it works correctly, I feel fulfilled and motivated to do more. I have 1 year of experience in training and have built a lot of projects HTML5, CSS3, JavaScript, Git & GitHub with incredible ease of adaptation and learning new technologies as need be.`,
    },
    educations: [
      {
        id: 0,
        school: 'Usmanu DanFodiyo University',
        degree: 'Bachelor',
        startDate: '2013-02',
        endDate: '2017-11',
        schoolLocation: 'Sokoto',
      },
    ],
    experience: [
      {
        company: '',
        startDate: '',
        endDate: '',
        location: '',
      },
    ],
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
      if (width >= breakPoint && showPersonalDetails) {
        setShowPersonalDetails(showPersonalDetails);
      }
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [showPersonalDetails, width]);

  return (
    <>
      <Favicon />
      <Header />
      <Main status={status} width={width} breakPoint={breakPoint}>
        {createResume ? (
          width >= breakPoint ? (
            <>
              <div className="button-container">
                <Button
                  status={status}
                  setStatus={setStatus}
                  name="Go Back"
                  value={value}
                />
                {/* <Button name="Download" /> */}
              </div>
              <ResumeForm
                value={value}
                setValue={setValue}
                showPersonalDetails={showPersonalDetails}
                setShowPersonalDetails={setShowPersonalDetails}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
                showEducations={showEducations}
                setShowEducations={setShowEducations}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
              />
              <ResumeContainer value={value} />
              {/* 08039118294 */}
            </>
          ) : (
            <>
              <ResumeForm
                value={value}
                setValue={setValue}
                showPersonalDetails={showPersonalDetails}
                setShowPersonalDetails={setShowPersonalDetails}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
                showEducations={showEducations}
                setShowEducations={setShowEducations}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
              />
              <div className="button-container">
                <Button
                  status={status}
                  setStatus={setStatus}
                  name="Go Back"
                  value={value}
                />
                <Button
                  status={status}
                  setStatus={setStatus}
                  name="Preview Resume"
                  value={value}
                />
              </div>
            </>
          )
        ) : previewResume ? (
          width >= breakPoint ? (
            <>
              <div className="button-container">
                <Button
                  status={status}
                  setStatus={setStatus}
                  name="Go Back"
                  value={value}
                />
                {/* <Button name="Download" /> */}
              </div>
              <ResumeForm
                value={value}
                setValue={setValue}
                showPersonalDetails={showPersonalDetails}
                setShowPersonalDetails={setShowPersonalDetails}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
                showEducations={showEducations}
                setShowEducations={setShowEducations}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
              />
              <ResumeContainer value={value} />
            </>
          ) : (
            <>
              <ResumeContainer value={value} />
              <div className="button-container">
                <Button
                  status={status}
                  setStatus={setStatus}
                  name="Go Back"
                  value={value}
                />
                {/* <Button name="Download" /> */}
              </div>
            </>
          )
        ) : (
          <Button
            status={status}
            setStatus={setStatus}
            name="Create Resume"
            value={value}
          />
        )}
      </Main>
      <Footer />
    </>
  );
}
