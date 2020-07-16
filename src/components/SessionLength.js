import React from "react";


function SessionLength(props) {
    const decreaseCounter = () => {
        if (props.SessionLength === 1) {
          return;
        }
    
        props.decreaseSession();
      };
    
      const increaseCounter = () => {
        if (props.SessionLength === 60) {
          return;
        }
        props.increaseSession();
      };

  return (
    <section>
      <h4>Session Interval</h4>
      <section className="interval__container">
        <button disabled = {props.isPlay ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
        <p className="interval__length">{props.SessionLength}</p>
        <button disabled = {props.isPlay ? "disabled" : ""} onClick={increaseCounter}>Up</button>
      </section>
    </section>
  );
}

export default SessionLength;
