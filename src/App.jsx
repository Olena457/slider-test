// import './App.module.css';
import CardsSlider from './componets/CardsSlider/CardsSlider.jsx';
import { cards } from '../src/data/cardsData.js';
import ContainerPage from './componets/ContainerPage/ContainerPage.jsx';

function App() {
  return (
    <ContainerPage>
      <CardsSlider cards={cards} />
    </ContainerPage>
  );
}

export default App;
