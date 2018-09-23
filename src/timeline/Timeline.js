import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import TimelineHeader from './timelineHeader/TimelineHeader';
import TimelineRowHeader from './timelineRowHeader/TimelineRowHeader';
import TimelineRowBody from './timelineRowBody/TimelineRowBody';
import { DURATION } from '../common/constants';

import WeekDurationManager from '../common/timelineManager/WeekDurationManager';

import './Timeline.css';

class Timeline extends Component {
    constructor() {
        super();
        this.state = {
            startDate: moment().subtract(1, 'months'),
            endDate: moment().add(10, 'months'),
            duration: DURATION.WEEK
        }
        this.durationManager = new WeekDurationManager();
    }

    render() {
        const {
            startDate,
            endDate
        } = this.state;
        const offsetWidth = this.durationManager.getOffsetBetween(startDate, endDate);
        return (
            <div className="timeline-container">
                <div className="timeline-header-container">
                    <TimelineHeader offsetWidth={ offsetWidth } />
                </div>
                <div className="timeline-content">
                    <div className="timeline-content-row-header">
                        { _.map(_.repeat('*', 8).split(''), () => <TimelineRowHeader />) }
                    </div>
                    <div className="timeline-content-row-body">
                        { _.map(_.repeat('*', 8).split(''), () => <TimelineRowBody offsetWidth={ offsetWidth } />) } 
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;