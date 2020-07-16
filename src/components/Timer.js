import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
    };
  }

  render() {
    return (
      <section>
        <section className="timer__container">
          <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
          <span className="timer__">{this.props.timerMinute}</span>
          <span className="timer__">:</span>
          <span className="timer__">
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </section>
        <section className="timer__action">
          <button>Play</button>
          <button>Skip</button>
          <button>Refresh</button>
        </section>
      </section>
    );
  }
}

export default Timer;
