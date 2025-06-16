import css from './CardComponent.module.css';

const CardComponent = ({ card }) => {
  return (
    <div className={css.cardCustomer}>
      <div className={css.logoContainer}>
        <img src={card.logo} alt={card.logo} />
      </div>
      <div className={css.containerReview}>
        <p>{card.review}</p>
      </div>
      <div className={css.iconcontainer}></div>
      <img src={card.icon} alt={card.icon} />
      <div className={css.profileContainer}>
        <img src={card.customer} alt={card.customer} width={60} height={60} />
        <div className={css.containerText}>
          <h4 className={css.name}>{card.initials}</h4>
          <p>{card.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
