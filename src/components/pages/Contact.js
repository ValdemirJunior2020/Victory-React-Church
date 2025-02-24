import React, { useEffect, useState } from "react";
import reviewsData from "../../data/reviews.json"; // Import reviews

const Contact = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData); // Load reviews from JSON file
  }, []);

  return (
    <div className="contact-container">
      <h1>Victory Worship  Church</h1>
      <p><strong>Address:</strong> 1915 N A St, Lake Worth Beach, FL 33460</p>
      <p><strong>Phone:</strong> (561) 585-0130 - email: example@gmail.com</p>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Victory Worship Center Church Map"
          src="https://maps.google.com/maps?q=Victory+Worship+Center+Church,1915+N+A+St,Lake+Worth+Beach,FL+33460&hl=es&z=15&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Reviews Section */}
      <div className="reviews-container">
        <h2>What People Are Saying</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
            <p>⭐ {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
