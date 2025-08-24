import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import { cards } from '../../data/cardsData.js';
import css from './WrapperComponent.module.css';
import FeaturesComponent from '../FeaturesComponent/FeaturesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import SectionContainer from '../SectionContainer/SectionContainer';

const WrapperComponent = () => {
  return (
    <>
      {/* <div className="section">
        <div className="container"> */}
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
