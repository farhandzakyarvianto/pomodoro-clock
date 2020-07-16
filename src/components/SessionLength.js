import React from "react";

function SessionLength(props) {
  return (
    <section>
      <h4>Session Interval</h4>
      <section className="interval__container">
        <button>Down</button>
        <p className="interval__length">{props.SessionLength}</p>
        <button>Up</button>
      </section>
    </section>
  );
}

export default SessionLength;
