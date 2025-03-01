import React, { useRef, useState } from 'react';
import './Cards.css';

function Cards() {
  const videoRef = useRef(null);
  const [enlargedMedia, setEnlargedMedia] = useState(null); // State for enlarged media

  // Function to handle image or video click for enlargement
  const handleEnlarge = (mediaSrc, type) => {
    setEnlargedMedia({ src: mediaSrc, type });
  };

  // Function to close the enlarged media
  const closeEnlargedMedia = () => {
    setEnlargedMedia(null);
  };

  return (
    <div className="cards">
      {/* Full-Screen Video Section */}
      <div className="video-card">
        <video 
          className="full-screen-video" 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
        >
          <source src="/videos/worship.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Cards Section */}
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* First Card - Playable Video */}
          <ul className="cards__items">
            <li className="cards__item sherry-card">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Experience">
                  <video
                    ref={videoRef}
                    className="cards__item__img sherry-video"
                    onClick={() => handleEnlarge("/videos/sherry.mp4", "video")} // Click to enlarge
                    controls
                    poster="/images/thumbnail.jpg"
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
                  <img
                    className="cards__item__img"
                    src="/images/img-9.jpg"
                    alt="Adventure"
                    onClick={() => handleEnlarge("/images/img-9.jpg", "image")} // Click to enlarge
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Our Church</h5>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Mystery">
                  <img
                    className="cards__item__img"
                    src="/images/img-3.jpg"
                    alt="Mystery"
                    onClick={() => handleEnlarge("/images/img-3.jpg", "image")} // Click to enlarge
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">
                    Text Number: (833) 562-3105
                    <br />
                    Keyword: victoryworship
                  </h5>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category="Adventure">
                  <img
                    className="cards__item__img"
                    src="/images/img-4.jpg"
                    alt="Himalayan Adventure"
                    onClick={() => handleEnlarge("/images/img-4.jpg", "image")} // Click to enlarge
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">
                    Text Number: (833) 562-3105
                    <br />
                    Keyword: victoryworship
                  </h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Lightbox Modal for Enlarged Media */}
      {enlargedMedia && (
        <div className="lightbox" onClick={closeEnlargedMedia}>
          <div className="lightbox-content">
            {enlargedMedia.type === "image" ? (
              <img src={enlargedMedia.src} alt="Enlarged" />
            ) : (
              <video controls>
                <source src={enlargedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
