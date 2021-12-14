import { useState } from 'react';
import Card from './Card';

export default function BlackjackTable({ deck }) {
    const [startGame, setStartGame] = useState(false);

    return (
        <div className='table'>
            {startGame === false ?
                <div>
                    <button className='game-controls play-btn' onClick={() => setStartGame(true)}>Play Blackjack</button>
                </div>
            : ''}
            {startGame === true ?
                <div>
                    <input className='game-controls m-r-20' placeholder='Enter Bet Amount' />
                    <button className='game-controls'>Place Bet</button>
                </div>
            : ''}
            <div className='game-area'>
                {deck.map(card => {
                    return <Card card={card} key={`${card.value}${card.suit}`} />
                })}    
            </div>
        </div>
    )
}


