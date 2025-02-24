import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Events.css"; // ✅ Correct path since it's in the same folder


const Events = () => {
  return (
    <div className="events-container">
      {/* Page Title */}
      <h1 className="events-title">Victory Worship Center</h1>

      {/* Victory Family Night */}
      <div className="event-card">
        <h2 className="event-header text-primary">VICTORY FAMILY NIGHT</h2>
        <p className="event-text">
          <span className="event-highlight">Wed., March 5th</span>
        </p>
        <p className="event-text">Join us for a fun-filled evening with activities for all ages!</p>
      </div>

      {/* Weekly Events */}
      <div className="event-card">
        <h3 className="event-header text-success">What's Happening This Week</h3>
        <p className="event-text text-primary">TUESDAY EXPERIENCE - 7 PM</p>
        <p className="event-text text-danger">THURSDAY MORNING CHAT - 8:30 AM (Live on Facebook)</p>
      </div>

      {/* Youth & Group Activities */}
      <div className="event-card">
        <h3 className="event-header text-secondary">Weekly Activities</h3>
        <p className="event-text"><strong>Wacky Wednesday (6:30-7:30 PM)</strong> - Fun for kids aged 6-12</p>
        <p className="event-text"><strong>Women's Group (6:30-7:30 PM)</strong> - Fellowship and support</p>
        <p className="event-text"><strong>Man Up (Men's Group)</strong> - Leadership and faith building</p>
      </div>

      {/* Youth Release Information */}
      <div className="event-card">
        <h3 className="event-header text-info">Youth Dismissal</h3>
        <p className="event-text">Youth will be dismissed after worship.</p>
        <p className="event-text">
          Students will be released at <span className="event-highlight">11:15 AM</span>. Please wait for them.
        </p>
      </div>
    </div>
  );
};

export default Events;
