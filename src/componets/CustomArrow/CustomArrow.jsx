import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import css from './CustomArrow.module.css';

export const CustomPrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${css.customArrow} ${css['arrow-prev']}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft className={css.arrowIcon} size={16} color=" #707070" />
    </div>
  );
};

export const CustomNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${css.customArrow} ${css['arrow-next']}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight className={css.arrowIcon} size={16} color=" #707070" />
    </div>
  );
};
