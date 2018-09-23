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
            duration: DURATION.WEEK,
            contentScrollTop: 0,
            contentScrollLeft: 0
        }
        this.durationManager = new WeekDurationManager();
        this.onScrollHandler = this.onScroll.bind(this);
        this.frameId = null;
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
                    <div style={{transform: `translateX(-${this.state.contentScrollLeft}px)`}}>
                        <TimelineHeader offsetWidth={ offsetWidth } />
                    </div>
                </div>
                <div className="timeline-content">
                    <div className="timeline-content-row-header">
                        <div style={{transform: `translateY(-${this.state.contentScrollTop}px)`}}>
                            { _.map(_.repeat('*', 15).split(''), (val, idx) => <TimelineRowHeader key={idx} />) }
                        </div>
                    </div>
                    <div className="timeline-content-row-body" onScroll={ this.onScrollHandler }>
                        { _.map(_.repeat('*', 15).split(''), (val, idx) => <TimelineRowBody offsetWidth={ offsetWidth } key={idx} />) } 
                    </div>
                </div>
            </div>
        );
    }

    onScroll(event) {
        if (!this.frameId) {
            const top = event.target.scrollTop;
            const left = event.target.scrollLeft;
            this.frameId = window.requestAnimationFrame((event) => {
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