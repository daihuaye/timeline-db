import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";

import "./TimelineHeader.css";

class TimelineHeader extends Component {
  constructor() {
    super();
    this.calculateDates = this.calculateDates.bind(this);
  }

  render() {
    const dates = this.calculateDates();
    return (
      <div
        className="timeline-header"
        style={{
          transform: `translateX(-${this.props.scrollLeft}px)`,
          width: this.props.offsetWidth
        }}
      >
        {_.map(dates, (date, idx) => (
          <div key={idx} style={{ transform: `translateX(${date.left}px)` }}>
            {this.props.manager.getDisplayDate(date.value)}
          </div>
        ))}
      </div>
    );
  }

  calculateDates() {
    const { manager, startDate, getViewportWidth, scrollLeft } = this.props;
    const displayDates = [];

    // get the date from scrollLeft
    const date = manager.getDateFromOffset(startDate, scrollLeft);
    const startDateOfWeek = moment(date).startOf(manager.getDuration());
    const endDate = manager
      .getDateFromOffset(startDate, scrollLeft + getViewportWidth())
      .add(1, "months");
    displayDates.push({
      value: startDateOfWeek,
      left: manager.getOffsetBetween(startDate, startDateOfWeek)
    });

    while (_.last(displayDates).value.isBefore(endDate)) {
      const last = _.last(displayDates);
      displayDates.push({
        value: moment(last.value).add(manager.getDayWidth(), "days"),
        left: last.left + manager.getPixelsPerBox()
      });
    }

    return displayDates;
  }
}

export default TimelineHeader;
