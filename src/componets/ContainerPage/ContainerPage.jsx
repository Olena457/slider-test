import css from './ContainerPage.module.css';

const ContainerPage = ({ children }) => {
  <h1 className={css.title}>Voices of Success with Sales Fortuna</h1>;

  return <div className={css.container}>{children}</div>;
};

export default ContainerPage;
