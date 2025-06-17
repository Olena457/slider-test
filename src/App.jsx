import 'modern-normalize';
import CardsSlider from './componets/CardsSlider/CardsSlider.jsx';
import { cards } from '../src/data/cardsData.js';
import './App.css';

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
