import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import { cards } from '../../data/cardsData.js';
import css from './WrapperComponent.module.css';
import FeaturesComponent from '../FeaturesComponent/FeaturesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';

const WrapperComponent = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className={css.sliderContainer}>
            <div className={css.sliderContent}>
              <div className={css.titleContainer}>
                <h1 className={css.title}>Don't waste your time and energy.</h1>
              </div>
              <CardsSlider cards={cards} />

              <SectionAccordion />

              <FeaturesComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapperComponent;
