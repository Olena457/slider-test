import Header from './components/Header/Header.jsx';
import WrapperComponent from './components/WrapperComponent/WrapperComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
// import SectionContainer from './components/SectionContainer/SectionContainer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <WrapperComponent />
      </div>
      <Footer />
    </>
  );
}
export default App;
