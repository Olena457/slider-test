import css from './CardComponent.module.css';

const CardComponent = ({ card }) => {
  return (
    <div className={css.cardCustomer}>
      <div className={css.logoContainer}>
        <img src={card.logo} alt={card.logo} />
      </div>
      <div className={css.containerReview}>
        <p className={css.reviewText}>{card.review}</p>
      </div>
      <div className={css.iconcontainer}>
        <img className={css.icon} src={card.icon} alt={card.icon} />
      </div>
      <div className={css.profileContainer}>
        <img
          src={card.customer}
          alt={card.customer}
          className={css.customerPhoto}
        />
        <div className={css.containerText}>
          <h4 className={css.name}>{card.initials}</h4>
          <p className={css.company}>{card.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
