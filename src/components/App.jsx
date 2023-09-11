import { useState, useEffect } from 'react';
import { getMonthName } from '../customHooks';
import Favicon from './Favicon';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Button from './Button';
import ResumeForm from './ResumeForm';
import ResumeContainer from './ResumeContainer';
import '../styles/App.css';

export default function App() {
  const [status, setStatus] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  // personal details section variables
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [editPersonalDetails, setEditPersonalDetails] = useState(false);

  // experience section variables
  const [showExperience, setShowExperience] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [companyTillDateActive, setCompanyTillDateActive] = useState(false);
  const [selectedExperienceId, setSelectedExperienceId] = useState(0);

  // educations section variables
  const [showEducations, setShowEducations] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [schoolTillDateActive, setSchoolTillDateActive] = useState(false);
  const [selectedEducationId, setSelectedEducationId] = useState(0);

  const [value, setValue] = useState({
    name: 'Abdulbasit Yusuf',
    email: 'jideotetic@gmail.com',
    phoneNumber: '09014349835',
    homeAddress: 'Lagos, Nigeria',
    careerSummary: `I’m a highly motivated Front-end developer highly invested in building responsive user interfaces and accessible websites. With strong background in semantic HTML, CSS, and JavaScript, I get my motivations from being able to develop websites with big part of accessibility in mind, when I use accessibility tools on websites I built and it works correctly, I feel fulfilled and motivated to do more. I have 1 year of experience in training and have built a lot of projects HTML5, CSS3, JavaScript, Git & GitHub with incredible ease of adaptation and learning new technologies as need be.`,

    company: '',
    position: '',
    companyStartDate: '',
    companyEndDate: '',
    companyTillDate: companyTillDateActive,
    companyLocation: '',
    jobDescription: '',

    school: '',
    degree: '',
    schoolStartDate: '',
    schoolEndDate: '',
    schoolTillDate: schoolTillDateActive,
    schoolLocation: '',

    personalDetails: {
      name: 'Abdulbasit Yusuf',
      email: 'jideotetic@gmail.com',
      phoneNumber: '09014349835',
      homeAddress: 'Lagos, Nigeria',
      careerSummary: `I’m a highly motivated Front-end developer highly invested in building responsive user interfaces and accessible websites. With strong background in semantic HTML, CSS, and JavaScript, I get my motivations from being able to develop websites with big part of accessibility in mind, when I use accessibility tools on websites I built and it works correctly, I feel fulfilled and motivated to do more. I have 1 year of experience in training and have built a lot of projects HTML5, CSS3, JavaScript, Git & GitHub with incredible ease of adaptation and learning new technologies as need be.`,
    },

    experience: [
      {
        id: 0,
        company: 'Accion Microfinance Bank',
        position: 'Customer Experience Officer',
        companyStartDate: `2022-${getMonthName(7)}`,
        companyEndDate: `${!companyTillDateActive ? 'Till Date' : ''}`,
        companyTillDate: !companyTillDateActive,
        companyLocation: 'Lagos, Nigeria',
        jobDescription: 'Handle customer enquiry, request and complaints',
      },
    ],

    educations: [
      {
        id: 0,
        school: 'Usmanu DanFodiyo University',
        degree: 'BSc. in Biochemistry',
        schoolStartDate: `2013-${getMonthName(2)}`,
        schoolEndDate: `${
          schoolTillDateActive ? 'Till Date' : `2017-${getMonthName(11)}`
        }`,
        schoolTillDate: schoolTillDateActive,
        schoolLocation: 'Sokoto, Nigeria',
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
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <Favicon />
      <Header />
      <Main status={status} width={width} breakPoint={breakPoint}>
        {createResume ? (
          width >= breakPoint ? (
            <>
              <div className="large-button-container">
                <Button name="Back" status={status} setStatus={setStatus} />
                <Button name="Download" />
              </div>
              <ResumeForm
                value={value}
                setValue={setValue}
                showPersonalDetails={showPersonalDetails}
                setShowPersonalDetails={setShowPersonalDetails}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
                showExperience={showExperience}
                setShowExperience={setShowExperience}
                addExperience={addExperience}
                setAddExperience={setAddExperience}
                editExperience={editExperience}
                setEditExperience={setEditExperience}
                companyTillDateActive={companyTillDateActive}
                setCompanyTillDateActive={setCompanyTillDateActive}
                selectedExperienceId={selectedExperienceId}
                setSelectedExperienceId={setSelectedExperienceId}
                showEducations={showEducations}
                setShowEducations={setShowEducations}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
                schoolTillDateActive={schoolTillDateActive}
                setSchoolTillDateActive={setSchoolTillDateActive}
                selectedEducationId={selectedEducationId}
                setSelectedEducationId={setSelectedEducationId}
              />
              <ResumeContainer value={value} setValue={setValue} />
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
                showExperience={showExperience}
                setShowExperience={setShowExperience}
                addExperience={addExperience}
                setAddExperience={setAddExperience}
                editExperience={editExperience}
                setEditExperience={setEditExperience}
                companyTillDateActive={companyTillDateActive}
                setCompanyTillDateActive={setCompanyTillDateActive}
                selectedExperienceId={selectedExperienceId}
                setSelectedExperienceId={setSelectedExperienceId}
                showEducations={showEducations}
                setShowEducations={setShowEducations}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
                schoolTillDateActive={schoolTillDateActive}
                setSchoolTillDateActive={setSchoolTillDateActive}
                selectedEducationId={selectedEducationId}
                setSelectedEducationId={setSelectedEducationId}
              />
              <div className="button-container">
                <Button name="Back" status={status} setStatus={setStatus} />
                <Button name="Preview" status={status} setStatus={setStatus} />
              </div>
            </>
          )
        ) : previewResume ? (
          width >= breakPoint ? (
            <>
              <div className="large-button-container">
                <Button name="Back" status={status} setStatus={setStatus} />
                <Button name="Download" />
              </div>
              <ResumeForm
                value={value}
                setValue={setValue}
                showPersonalDetails={showPersonalDetails}
                setShowPersonalDetails={setShowPersonalDetails}
                editPersonalDetails={editPersonalDetails}
                setEditPersonalDetails={setEditPersonalDetails}
                showExperience={showExperience}
                setShowExperience={setShowExperience}
                addExperience={addExperience}
                setAddExperience={setAddExperience}
                editExperience={editExperience}
                setEditExperience={setEditExperience}
                companyTillDateActive={companyTillDateActive}
                setCompanyTillDateActive={setCompanyTillDateActive}
                selectedExperienceId={selectedExperienceId}
                setSelectedExperienceId={setSelectedExperienceId}
                showEducations={showEducations}
                setShowEducations={setShowEducations}
                addEducation={addEducation}
                setAddEducation={setAddEducation}
                editEducation={editEducation}
                setEditEducation={setEditEducation}
                schoolTillDateActive={schoolTillDateActive}
                setSchoolTillDateActive={setSchoolTillDateActive}
                selectedEducationId={selectedEducationId}
                setSelectedEducationId={setSelectedEducationId}
              />
              <ResumeContainer value={value} setValue={setValue} />
            </>
          ) : (
            <>
              <ResumeContainer value={value} setValue={setValue} />
              <div className="button-container">
                <Button name="Back" status={status} setStatus={setStatus} />
                <Button name="Download" />
              </div>
            </>
          )
        ) : (
          <Button name="Create Resume" status={status} setStatus={setStatus} />
        )}
      </Main>
      <Footer />
    </>
  );
}
