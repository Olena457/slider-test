import { cards } from '../../data/cardsData.js';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import FeaturesComponent from '../FeaturesComponent/FeaturesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import SectionContainer from '../SectionContainer/SectionContainer';
import css from './WrapperComponent.module.css';

const WrapperComponent = () => {
  return (
    <>
      <SectionContainer maxWidth="90%" mx="auto">
        <div className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.titleContainer}>
              <h1 className={css.title}>Don't waste your time and energy.</h1>
            </div>
            <CardsSlider cards={cards} />
          </div>
        </div>
      </SectionContainer>

      <SectionAccordion />
      <FeaturesComponent />
    </>
  );
};

export default WrapperComponent;
