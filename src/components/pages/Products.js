import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VictoryFamilyNight = () => {
  return (
    <div className="container mt-5 p-4 bg-light shadow rounded">
      {/* Church Header */}
      <h1 className="text-center text-primary fw-bold">VICTORY WORSHIP CENTER</h1>
      <p className="text-center text-info fs-5">COMING SOON TO VICTORY</p>

      {/* Victory Family Night */}
      <h2 className="text-center fw-bold mt-3">VICTORY FAMILY NIGHT</h2>
      <p className="text-center">
        <strong>Wed., February 5th</strong> | Dinner <strong>5:30-6:15</strong> | Classes <strong>6:30-7:30</strong>
      </p>
      <p className="text-center text-muted">A GROUP FOR EVERYONE!</p>

      {/* Love Lake Worth */}
      <div className="text-center mt-4">
        <h2 className="text-danger fw-bold">LOVE LAKE WORTH</h2>
        <p className="fs-5">Next event: <strong>Feb. 8th</strong></p>
        <p>
          Sign up at{" "}
          <a href="http://www.lovelakeworth.com" className="text-primary fw-bold">
            www.lovelakeworth.com
          </a>
        </p>
      </div>

      {/* Speaker Section */}
      <div className="text-center mt-4">
        <h3 className="fw-semibold">Jeff Ferguson</h3>
        <p>Coming <strong>Tue. Feb. 11th</strong></p>
        <img
          src="/path-to-jeff-ferguson-image.jpg"
          alt="Jeff Ferguson"
          className="rounded-circle shadow-sm mt-2"
          width="100"
        />
      </div>

      {/* Pastors */}
      <div className="mt-4 p-3 bg-secondary text-white rounded">
        <h5 className="text-center">Church Pastors</h5>
        <p><strong>Senior Pastor:</strong> Sherry Colby</p>
        <p><strong>Associate Pastor:</strong> Christopher Cooper</p>
        <p><strong>Associate Pastor:</strong> Kraig Busman</p>
        <p><strong>Church Phone:</strong> 561.585.0130</p>
      </div>

      {/* Events This Week */}
      <div className="mt-4 text-center">
        <h2 className="fw-semibold text-secondary">WHAT'S HAPPENING THIS WEEK</h2>
        <p className="fs-5 fw-bold text-primary">TUESDAY EXPERIENCE</p>
        <p className="fs-5">7 PM</p>
        <p className="fs-5 fw-bold text-danger">THURSDAY MORNING CHAT</p>
        <p className="fs-5">8:30 AM LIVE ON FACEBOOK</p>
      </div>

      {/* Children's Department */}
      <p className="mt-4 text-center text-muted">
        CHILDREN’S DEPARTMENT AND YOUTH WILL BE DISMISSED AFTER WORSHIP
      </p>

      {/* Pastor's Books */}
      <div className="mt-4 p-3 bg-light border rounded text-center">
        <h5 className="fw-bold">PASTOR SHERRY’S BOOKS:</h5>
        <p><strong>THIS IS YOUR YEAR</strong> & <strong>HOLDING ON TO A PROMISE</strong></p>
        <p>Available in the back for a <strong>$10 donation</strong></p>
      </div>
    </div>
  );
};

export default VictoryFamilyNight;
