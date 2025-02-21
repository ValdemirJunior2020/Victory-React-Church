import React from "react";
import "../../App.css"; // Ensure styles are applied

function Donate() {
  return (
    <div className="donate">
      <h1>Donate via Text</h1>
      <p>To donate via text, follow these instructions:</p>
      <ul>
        <li><strong>Text Number:</strong> (833) 562-3105</li>
        <li><strong>Keyword:</strong> victoryworship</li>
      </ul>
      <p>Simply text the keyword to the number above to contribute.</p>
    </div>
  );
}

export default Donate;
