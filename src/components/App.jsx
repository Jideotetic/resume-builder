import Favicon from './Favicon';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CreateResumeButton from './CreateResumeButton';
import '../styles/App.css';

function App() {
  return (
    <>
      <Favicon />
      <Header />
      <Main>
        <CreateResumeButton />
      </Main>
      <Footer />
    </>
  );
}

export default App;
