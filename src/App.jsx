import { ThemeProvider } from '@mui/material/styles';
import myCustomTheme from './theme.js';
import Header from './components/Header/Header.jsx';
import WrapperComponent from './components/WrapperComponent/WrapperComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
import SectionContainer from './components/SectionContainer/SectionContainer.jsx';

import './App.css';
import HomeButton from './components/HomeButton/HomeButton.jsx';

function App() {
  return (
    <>
      <ThemeProvider theme={myCustomTheme}>
        <SectionContainer py={0} maxWidth="100%" mx="auto">
          <Header />
        </SectionContainer>
        <WrapperComponent />
        <SectionContainer
          id="contacts-section"
          py={0}
          maxWidth="100%"
          mx="auto"
        >
          <Footer />
        </SectionContainer>
        <HomeButton />
      </ThemeProvider>
    </>
  );
}
export default App;
