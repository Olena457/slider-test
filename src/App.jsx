import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import FormComponent from './FormComponent';
import ItemsList from './ItemsList';
import myCustomTheme from './theme.js';
import Header from './components/Header/Header.jsx';
import WrapperComponent from './components/WrapperComponent/WrapperComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
import SectionContainer from './components/SectionContainer/SectionContainer.jsx';
import './App.css';

function App() {
  // const handleScrollToSection = id => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  const [items, setItems] = useState([]);

  const handleAddItem = newItem => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const handleDeleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };
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
          <CssBaseline />
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <FormComponent onAddItem={handleAddItem} />
              <ItemsList items={items} onDeleteItem={handleDeleteItem} />
            </Box>
          </Container>
          <Footer />
        </SectionContainer>
      </ThemeProvider>
    </>
  );
}
export default App;
