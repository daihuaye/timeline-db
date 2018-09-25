import React, { Component } from "react";
import TimelineCellBody from "../timelineCellBody/TimelineCellBody";
import TimelineCellHeader from "../timelineCellHeader/TimelineCellHeader";

import "./TimelineCell.css";

class TimelineCell extends Component {
  render() {
    return (
      <div className="timeline-cell" style={{ width: this.props.offsetWidth }}>
        <TimelineCellHeader style={{ display: "inline-block" }} />
        <TimelineCellBody
          offsetWidth={this.props.offsetWidth}
          style={{ display: "inline-block" }}
        />
      </div>
    );
  }
}

export default TimelineCell;
