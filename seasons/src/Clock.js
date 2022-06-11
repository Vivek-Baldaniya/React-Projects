import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ date: new Date().toLocaleTimeString() }),
      1000
    );
  }

  render() {
    return (
      <div>
        <h1>Live Clock</h1>
        <h2>It is {this.state.date}</h2>
      </div>
    );
  }
}

export default Clock;
