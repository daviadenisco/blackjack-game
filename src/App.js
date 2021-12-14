import BlackjackTable from './BlackjackTable';
import { createDeck } from './helpers';
import './App.css';

function App() {
  const deck = createDeck();
  return (
    <div>
      <header>Blackjack!</header>
      <div>
        <BlackjackTable deck={deck} />
      </div>
    </div>
  );
}

export default App;

