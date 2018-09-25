import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";

import TimelineHeader from "./timelineHeader/TimelineHeader";
import TimelineCell from "./timelineCell/TimelineCell";
import { DURATION } from "../common/constants";

import WeekDurationManager from "../common/timelineManager/WeekDurationManager";

import "./Timeline.css";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().subtract(1, "months"),
      endDate: moment().add(10, "months"),
      duration: DURATION.WEEK,
      contentScrollTop: 0,
      contentScrollLeft: 0,
      cellContents: [],
      cellHeaders: []
    };
    this.durationManager = new WeekDurationManager();
    this.onScroll = this.onScroll.bind(this);
    this.frameId = null;
    this.timelineContainerRef = React.createRef();
    this.getContainerWidth = this.getContainerWidth.bind(this);
  }

  componentWillMount() {
    this.props.serviceApi.getData().then(({ cellHeaders, cellContents }) => {
      this.setState({
        cellHeaders,
        cellContents
      });
    });
  }

  render() {
    const { startDate, endDate } = this.state;
    const offsetWidth = this.durationManager.getOffsetBetween(
      startDate,
      endDate
    );
    return (
      <div
        className="timeline-container"
        ref={this.timelineContainerRef}
        onScroll={this.onScroll}
      >
        <div className="timeline-header-container">
          <TimelineHeader
            manager={this.durationManager}
            offsetWidth={offsetWidth}
            startDate={this.state.startDate}
            getViewportWidth={this.getContainerWidth}
            scrollLeft={this.state.contentScrollLeft}
          />
        </div>
        <div className="timeline-cell-container">
          {_.map(this.state.cellHeaders, data => (
            <TimelineCell key={data.id} offsetWidth={offsetWidth} />
          ))}
        </div>
      </div>
    );
  }

  getContainerWidth() {
    return (
      this.timelineContainerRef.current &&
      this.timelineContainerRef.current.offsetWidth
    );
  }

  onScroll(event) {
    const top = event.target.scrollTop;
    const left = event.target.scrollLeft;
    if (!this.frameId) {
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
