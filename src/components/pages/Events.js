import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Events = () => {
  return (
    <div className="container mt-5 p-4 bg-light shadow rounded">
      {/* Page Title */}
      <h1 className="text-center text-primary fw-bold">Upcoming Church Events</h1>

      {/* Victory Family Night */}
      <div className="mt-4 p-3 border rounded bg-white">
        <h2 className="fw-bold">VICTORY FAMILY NIGHT</h2>
        <p>
          <strong>Wed., February 5th</strong> | Dinner <strong>5:30-6:15</strong> | Classes <strong>6:30-7:30</strong>
        </p>
        <p className="text-muted">A GROUP FOR EVERYONE!</p>
      </div>

      {/* Love Lake Worth */}
      <div className="mt-4 p-3 border rounded bg-white">
        <h2 className="text-danger fw-bold">LOVE LAKE WORTH</h2>
        <p>Next event: <strong>Feb. 8th</strong></p>
        <p>
          Sign up at{" "}
          <a href="http://www.lovelakeworth.com" className="text-primary fw-bold">
            www.lovelakeworth.com
          </a>
        </p>
      </div>

      {/* Speaker Section */}
      <div className="mt-4 p-3 border rounded bg-white">
        <h3 className="fw-semibold">Guest Speaker: Jeff Ferguson</h3>
        <p>Coming <strong>Tue. Feb. 11th</strong></p>
        <img
          src="/path-to-jeff-ferguson-image.jpg"
          alt="Jeff Ferguson"
          className="rounded-circle shadow-sm mt-2"
          width="100"
        />
      </div>

      {/* Events This Week */}
      <div className="mt-4 p-3 border rounded bg-white">
        <h2 className="fw-semibold text-secondary">WHAT'S HAPPENING THIS WEEK</h2>
        <p className="fs-5 fw-bold text-primary">TUESDAY EXPERIENCE - 7 PM</p>
        <p className="fs-5 fw-bold text-danger">THURSDAY MORNING CHAT - 8:30 AM (Live on Facebook)</p>
      </div>
    </div>
  );
};

export default Events;
