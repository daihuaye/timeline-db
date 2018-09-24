import React, { Component } from "react";

class TimelineHeader extends Component {
  render() {
    return (
      <div
        style={{ width: this.props.offsetWidth }}
        style={{ transform: `translateX(-${this.props.scrollLeft}px)` }}
      >
        <div>Hello world</div>
      </div>
    );
  }

  calculateDates() {}
}

export default TimelineHeader;
