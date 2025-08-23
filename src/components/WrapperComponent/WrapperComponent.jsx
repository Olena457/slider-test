import css from './MainComponent.module.css';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import { cards } from '../../data/cardsData.js';

import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import Footer from '../Footer/Footer.jsx';

const MainComponent = () => {
  return (
    <>
      <div className="container">
        <div className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.titleContainer}>
              <h1 className={css.title}>Don't waste your time and energy.</h1>
            </div>
            <CardsSlider cards={cards} />
            <div className={css.containerTitle}>
              <h2 className={css.title}>Frequently Asked Questions</h2>
            </div>
            <SectionAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
