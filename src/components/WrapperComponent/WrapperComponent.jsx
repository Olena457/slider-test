import { cards } from '../../data/cardsData.js';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import AdvantagesComponent from '../AdvantagesComponent/AdvantagesComponent.jsx';
import SectionAccordion from '../SectionAccordion/SectionAccordion.jsx';
import SectionContainer from '../SectionContainer/SectionContainer';
import LibraryList from '../LibraryList/LibraryList.jsx';
import css from './WrapperComponent.module.css';
import TeachComponents from '../TeachComponents/TeachComponents.jsx';

const WrapperComponent = () => {
  return (
    <>
      <SectionContainer id="reviews-section" maxWidth="90%" mx="auto">
        <div className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.titleContainer}>
              <h1 className={css.title}>Don't waste your time.</h1>
            </div>
            <CardsSlider cards={cards} />
          </div>
        </div>
      </SectionContainer>
      <SectionAccordion />
      <AdvantagesComponent />
      <LibraryList />
      <TeachComponents />
    </>
  );
};

export default WrapperComponent;
