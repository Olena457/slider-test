import { cards } from '../../data/cardsData.js';
import { Typography } from '@mui/material';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import AdvantagesComponent from '../AdvantagesComponent/AdvantagesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import SectionContainer from '../SectionContainer/SectionContainer';
import LibraryList from '../LibraryList/LibraryList.jsx';
import css from './WrapperComponent.module.css';
import TeachComponents from '../TeachComponents/TeachComponents.jsx';
import ToolsComponet from '../ToolsComponent/ToolsComponent.jsx';
import FloatingComponent from '../FloatigComponent/FloatingComponent.jsx';
const WrapperComponent = () => {
  return (
    <>
      <FloatingComponent />
      <TeachComponents />

      <SectionContainer id="reviews-section" maxWidth="90%" mx="auto">
        <div className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.titleContainer}>
              <Typography
                variant="h3"
                // mb={1}
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
      <AdvantagesComponent />
      <ToolsComponet />
    </>
  );
};

export default WrapperComponent;
