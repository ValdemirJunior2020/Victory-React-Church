import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem({ src, text, label, path, isVideo }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Toggle Play/Pause on Click
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={path || '#'}>
        <figure className="cards__item__pic-wrap" data-category={label}>
          {isVideo ? (
            <video
              ref={videoRef}
              className="cards__item__img"
              onClick={handleVideoClick} // ✅ Click to Play/Pause
              controls // ✅ Show Play/Pause Button
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className="cards__item__img" src={src} alt={label || 'Card Image'} />
          )}
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
