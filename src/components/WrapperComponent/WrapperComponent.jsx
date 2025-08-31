import { cards } from '../../data/cardsData.js';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import AdvantagesComponent from '../AdvantagesComponent/AdvantagesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import SectionContainer from '../SectionContainer/SectionContainer';
import LibraryList from '../LibraryList/LibraryList.jsx';
import TeachComponents from '../TeachComponents/TeachComponents.jsx';
import ToolsComponet from '../ToolsComponent/ToolsComponent.jsx';
import FloatingComponent from '../FloatignComponent/FloatingComponent.jsx';
import FormComponent from '../../components/FormComponent/FormComponent.jsx';
import ItemsList from '../../components/ItemList/ItemList.jsx';
import InfinityTextAnimation from '../../components/InfinityTextAnimation/InfinityTextAnimantion.jsx';
import PricingContainer from '../../components/PricingContainer/PricingContainer.jsx';
import HomeButton from '../../components/HomeButton/HomeButton.jsx';
import css from './WrapperComponent.module.css';

const WrapperComponent = () => {
  return (
    <>
      <FloatingComponent />
      <TeachComponents />
      <AdvantagesComponent />
      <SectionContainer id="reviews-section" maxWidth="90%" mx="auto">
        <div className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.titleContainer}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    sm: '1.8rem',
                    md: '2.5rem',
                  },
                  textAlign: 'center',
                  mb: 6,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
                }}
              >
                Start your journey to success today!
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
      <HomeButton />
      <InfinityTextAnimation text="AIDE  PERSONAL DEVELOPMENT ENGINE" />
    </>
  );
};

export default WrapperComponent;
