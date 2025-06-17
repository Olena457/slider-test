import CardsSlider from './componets/CardsSlider/CardsSlider.jsx';
import 'modern-normalize';
import './App.css';
import { cards } from '../src/data/cardsData.js';
// import ContainerPage from './componets/ContainerPage/ContainerPage.jsx';

function App() {
  return (
    <div className="sliderWrapper">
      <div className="containerTitle">
        <h1 className="title">Voices of Success with Sales Fortuna</h1>
      </div>
      <CardsSlider cards={cards} />
    </div>
  );
}
export default App;
