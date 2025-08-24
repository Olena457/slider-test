import Header from './components/Header/Header.jsx';
import WrapperComponent from './components/WrapperComponent/WrapperComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
import SectionContainer from './components/SectionContainer/SectionContainer.jsx';
import './App.css';

function App() {
  return (
    <>
      {/* <div className="wrapper"> */}
      <SectionContainer py={0} maxWidth="100%" mx="auto">
        <Header />
      </SectionContainer>
      <WrapperComponent />
      <SectionContainer py={0} maxWidth="100%" mx="auto">
        <Footer />
      </SectionContainer>
      {/* </div> */}
    </>
  );
}
export default App;
