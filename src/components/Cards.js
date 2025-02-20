import React, { useRef, useState } from 'react';
import './Cards.css';

function Cards() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
    <div className="cards">
      {/* Full-Screen Video Section */}
      <div className="video-card">
        <video className="full-screen-video" autoPlay loop muted>
          <source src="/videos/worship.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Cards Section */}
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* First Card - Playable Video */}
          <ul className="cards__items">
            <li className="cards__item">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Experience">
                  <video
                    ref={videoRef} // Attach ref to sherry video
                    className="cards__item__img" // Keep class for styling
                    onClick={handleVideoClick} // Toggle play/pause
                    controls // Built-in controls
                    // poster="/videos/thumbnail.jpg" // Optional thumbnail
                  >
                    <source src="/videos/sherry.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Our Pastor</h5>
                </div>
              </div>
            </li>
          </ul>

          {/* Second Row of Cards */}
          <ul className="cards__items">
            <li className="cards__item">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Adventure">
                  <img className="cards__item__img" src="/images/img-9.jpg" alt="Adventure" />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Explore the hidden waterfall deep inside the Amazon Jungle</h5>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Mystery">
                  <img className="cards__item__img" src="/images/img-3.jpg" alt="Mystery" />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Set Sail in the Atlantic Ocean visiting Uncharted Waters</h5>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Adventure">
                  <img className="cards__item__img" src="/images/img-4.jpg" alt="Himalayan Adventure" />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Experience Football on Top of the Himalayan Mountains</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;