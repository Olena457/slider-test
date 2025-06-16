import css from './CustomArrow.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CastomArrow = ({ onClick, direction }) => {
  return (
    <button className={css.btnArrow} onClick={onClick}>
      {direction === 'left' ? (
        <FaChevronLeft className={css.arrow} />
      ) : (
        <FaChevronRight className={css.arrow} />
      )}
    </button>
  );
};

export default CastomArrow;
