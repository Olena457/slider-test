// import css from './CustomArrow.module.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// export const CustomPrevArrow = ({ className, style, onClick }) => (
//   <div
//     className={`${className} ${css.customArrow} ${css['arrow-prev']}`}
//     style={{ ...style }}
//     onClick={onClick}
//   >
//     <FaChevronLeft className={css.arrowIcon} size={20} color=" #707070" />
//   </div>
// );

// export const CustomNextArrow = ({ className, style, onClick }) => (
//   <div
//     className={`${className} ${css.customArrow} ${css['arrow-next']}`}
//     style={{ ...style }}
//     onClick={onClick}
//   >
//     <FaChevronRight className={css.arrowIcon} size={20} color=" #707070" />
//   </div>
// );
export const CustomNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: ' #707070',
      }}
      onClick={onClick}
    >
      ▶
    </div>
  );
};

export const CustomPrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: ' #707070',
      }}
      onClick={onClick}
    ></div>
  );
};
