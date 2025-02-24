import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PrayerGroup.css"; // ✅ Import the styles

const PrayerGroup = () => {
  return (
    <div className="prayer-group-container">
      <h1 className="text-center prayer-title">VWC Prayer Group</h1>

      <div className="row justify-content-center">
        {/* Zoom Prayer Meeting Card */}
        <div className="col-md-6">
  <div className="card prayer-card">
    <img src="/images/zoom-prayer.jpg" className="card-img-top small-image" alt="Zoom Prayer" />
    <div className="card-body">
      <h5 className="card-title text-primary">Starting Feb. 27</h5>
      <p className="card-text"><strong>Thursdays 7:30 PM - 9 PM</strong></p>
      <p className="card-text">Join our Prayer Group on <strong>Zoom</strong></p>
      <p className="card-text"><strong>For more info:</strong> Call/Text Carol Asbury at <strong>(561) 704-5456</strong></p>
      <p className="card-text">
        <strong>Meeting ID:</strong> 842 4746 7601 <br />
        <strong>Passcode:</strong> victory
      </p>
    </div>
  </div>
</div>


        {/* Bible Verses Card */}
<div className="col-md-6">
  <div className="card prayer-card">
  <img src="/images/bible-verses.jpg" className="card-img-top" alt="Bible Verses" />


    <div className="card-body">
      <h5 className="card-title text-success">Do You Have Questions About Salvation?</h5>
      <p className="card-text"><strong>Romans 3:10</strong> - There is none righteous, no, not one.</p>
      <p className="card-text"><strong>Romans 3:23</strong> - For all have sinned and come short of the glory of God.</p>
      <p className="card-text"><strong>Romans 10:9</strong> - If you confess with your mouth the Lord Jesus, and believe in your heart that God raised Him from the dead, you will be saved.</p>
    </div>
  </div>
</div>


        {/* Victory Worship Center Card */}
        <div className="col-md-6">
          <div className="card prayer-card">
            <img src="/images/victory-worship.jpg" className="card-img-top" alt="Victory Worship" />
            <div className="card-body">
              <h5 className="card-title text-info">Victory Worship Center</h5>
              <p className="card-text">
                "Moving in the Spirit" - Join us in worship and spiritual growth.
              </p>
              <p className="card-text">For more details, visit our website or attend our services.</p>
            </div>
          </div>
        </div>

        {/* Text to Give Card */}
        <div className="col-md-6">
          <div className="card prayer-card">
            <img src="/images/text-to-give.jpg" className="card-img-top" alt="Text to Give" />
            <div className="card-body">
              <h5 className="card-title text-warning">Text to Give</h5>
              <p className="card-text">Support our mission easily by texting:</p>
              <p className="card-text"><strong>"victoryworship"</strong> to <strong>(833) 562-3105</strong></p>
              <p className="card-text">Your contributions help sustain Victory Worship Center.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerGroup;
