import club from './images/club.png';
import diamond from './images/diamond.png';
import heart from './images/heart.png';
import spade from './images/spade.png';

export default function Card({ card }) {
    
    const handleImgSelection = (suit) => {
        if (suit === 'clubs') {
          return club;
        } else if (suit === 'diamonds') {
            return diamond;
        } else if (suit === 'hearts') {
            return heart;
        } else if (suit === 'spades') {
            return spade;
        };
      };

    return (
        <div className='card'>
            {card.value} 
            <img 
                className='card-img'
                src={handleImgSelection(card.suit)}
                alt={card.suit}
            />
        </div>
    )
}

