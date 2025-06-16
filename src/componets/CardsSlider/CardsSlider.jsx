import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSettings } from './sliderSettings.js';
import Slider from 'react-slick';
import css from './CardsSlider.module.css';
import CardComponent from '../CardComponent/CardComponent.jsx';
import CustomArrow from '../CustomArrow/CustomArrow.jsx';

const CardsSlider = ({ cards }) => {
  const settings = {
    ...sliderSettings,
    nextArrow: <CustomArrow className={css.right} direction="right" />,
    prevArrow: <CustomArrow className={css.left} direction="Left" />,
  };
  return (
    // <div className={css.containerList}>
    <Slider {...settings} className={css.sliderContainer}>
      {cards.map((card, index) => (
        <div key={index} className={css.cardCustomer}>
          <CardComponent card={card} />
        </div>
      ))}
    </Slider>
  );
};

export default CardsSlider;
