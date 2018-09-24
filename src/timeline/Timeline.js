import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import TimelineHeader from "./timelineHeader/TimelineHeader";
import TimelineCellHeader from "./timelineCellHeader/TimelineCellHeader";
import TimelineCellBody from "./timelineCellBody/TimelineCellBody";
import { DURATION } from "../common/constants";

import WeekDurationManager from "../common/timelineManager/WeekDurationManager";

import "./Timeline.css";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment().subtract(1, "months"),
      endDate: moment().add(10, "months"),
      duration: DURATION.WEEK,
      contentScrollTop: 0,
      contentScrollLeft: 0
    };
    this.durationManager = new WeekDurationManager();
    this.onScrollHandler = this.onScroll.bind(this);
    this.frameId = null;
    this.timelineContainerRef = React.createRef();
    this.getContainerCurrentWidth = this.getContainerWidth.bind(this);
  }

  render() {
    const { startDate, endDate } = this.state;
    const offsetWidth = this.durationManager.getOffsetBetween(
      startDate,
      endDate
    );
    return (
      <div className="timeline-container" ref={this.timelineContainerRef}>
        <div className="timeline-header-container">
          <TimelineHeader
            manager={this.durationManager}
            offsetWidth={offsetWidth}
            startDate={this.state.startDate}
            viewportWidth={this.getContainerCurrentWidth}
            scrollLeft={this.state.contentScrollLeft}
          />
        </div>
        <div className="timeline-content">
          <div className="timeline-content-cell-header">
            <div
              style={{
                transform: `translateY(-${this.state.contentScrollTop}px)`
              }}
            >
              {_.map(_.repeat("*", 15).split(""), (val, idx) => (
                <TimelineCellHeader key={idx} />
              ))}
            </div>
          </div>
          <div
            className="timeline-content-cell-body"
            onScroll={this.onScrollHandler}
          >
            {_.map(_.repeat("*", 15).split(""), (val, idx) => (
              <TimelineCellBody offsetWidth={offsetWidth} key={idx} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  getContainerWidth() {
    return this.timelineContainerRef.current.offsetWidth;
  }

  onScroll(event) {
    if (!this.frameId) {
      const top = event.target.scrollTop;
      const left = event.target.scrollLeft;
      this.frameId = window.requestAnimationFrame(event => {
        this.frameId = null;
        this.setState({
          contentScrollTop: top,
          contentScrollLeft: left
        });
      });
    }
  }
}

export default Timeline;
