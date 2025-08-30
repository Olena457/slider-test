import { cards } from '../../data/cardsData.js';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import AdvantagesComponent from '../AdvantagesComponent/AdvantagesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import SectionContainer from '../SectionContainer/SectionContainer';
import LibraryList from '../LibraryList/LibraryList.jsx';
import TeachComponents from '../TeachComponents/TeachComponents.jsx';
import ToolsComponet from '../ToolsComponent/ToolsComponent.jsx';
import FloatingComponent from '../FloatigComponent/FloatingComponent.jsx';
import FormComponent from '../../components/FormComponent/FormComponent.jsx';
import ItemsList from '../../components/ItemList/ItemList.jsx';
import InfinityTextAnimation from '../../components/InfinityTextAnimation/InfinityTextAnimantion.jsx';
import PricingContainer from '../../components/PricingContainer/PricingContainer.jsx';
import css from './WrapperComponent.module.css';

const WrapperComponent = () => {
  return (
    <>
      <FloatingComponent />
      <TeachComponents />
      <SectionContainer id="reviews-section" maxWidth="90%" mx="auto">
        <AdvantagesComponent />

        <div className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.titleContainer}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    sm: '1.8rem',
                    md: '2.5rem',
                  },
                  textAlign: 'center',
                  mb: '1rem',
                }}
              >
                Don't waste your time and energy.
              </Typography>
            </div>
            <CardsSlider cards={cards} />
          </div>
        </div>
      </SectionContainer>
      <SectionAccordion />
      <LibraryList />
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <FormComponent />
          <ItemsList />
        </Box>
      </Container>
      <ToolsComponet />
      <PricingContainer />
      <InfinityTextAnimation text="AIDE  PERSONAL DEVELOPMENT ENGINE" />
    </>
  );
};

export default WrapperComponent;
