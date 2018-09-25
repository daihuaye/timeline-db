import React, { Component } from "react";
import "./TimelineCellHeader.css";

class TimelineCellHeader extends Component {
  render() {
    return (
      <div className="timeline-cell-header" style={{ ...this.props.style }}>
        Cell header
      </div>
    );
  }
}

export default TimelineCellHeader;
