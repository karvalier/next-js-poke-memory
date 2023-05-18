import { useEffect, useState } from 'react';
import Image from 'next/image';
import Pokebola from '../styles/pokeball-pokemon-svgrepo-com.svg';

const Card = ({ value, onClick, active, img, clearCard})  => {
  const [isFlipped, setIsFlipped] = useState(active || false);

  const handleClick = () => {
      onClick(value);
  };

  useEffect(() => {
      setIsFlipped(active);
      console.log(active)
    }, [active]);

  return (
    <div   style={{opacity: clearCard ? 0.2 : 1, pointerEvents: clearCard ? 'none': ''}} className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      {clearCard ? <div className="card-front" ><Image src={Pokebola} width={100} height={150} style={{opacity:  0.7}}/></div>: ''}
      {!clearCard ? <div className="card-front"><Image src={Pokebola} width={100} height={150} /></div> : ''}
      {!clearCard ? <div className="card-back"><img src={img ?? ''} /></div>: ''}
    </div>
  );
}

export default Card;