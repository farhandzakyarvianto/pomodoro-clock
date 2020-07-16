import React from "react";

function BreakInterval(props) {
  const decreaseCounter = () => {
    if (props.BreakInterval === 1) {
      return;
    }

    props.decreaseBreak();
  };

  const increaseCounter = () => {
    if (props.BreakInterval === 60) {
      return;
    }
    props.increaseBreak();
  };

  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval__container">
        <button onClick={decreaseCounter}>Down</button>
        <p className="interval__length">{props.BreakInterval}</p>
        <button onClick={increaseCounter}>Up</button>
      </section>
    </section>
  );
}

export default BreakInterval;
