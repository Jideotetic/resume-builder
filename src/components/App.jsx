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
    const handleWindowResize = () => setWidth(window.innerWidth);
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
              <Button status={status} setStatus={setStatus} name="Go Back" />
              <ResumeForm />
              <ResumeContainer />
            </>
          ) : (
            <>
              <ResumeForm />
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
              <ResumeForm />
              <ResumeContainer />
            </>
          ) : (
            <>
              <ResumeContainer />
              <Button status={status} setStatus={setStatus} name="Go Back" />
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
