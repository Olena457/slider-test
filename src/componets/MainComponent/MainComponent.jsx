import css from './MainComponent.module.css';
import CardsSlider from '../CardsSlider/CardsSlider.jsx';
import { cards } from '../../data/cardsData.js';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const MainComponent = () => {
  return (
    <div className={css.main}>
      <>
        <Header />
        <div className="sliderWrapper">
          <div className="containerTitle">
            <h1 className="title">Voices of Success with Sales Fortuna</h1>
          </div>
          <CardsSlider cards={cards} />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default MainComponent;
