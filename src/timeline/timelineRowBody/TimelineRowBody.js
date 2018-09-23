import React, { Component } from 'react';
import './TimelineRowBody.css';

class TimelineRowBody extends Component {
    render() {
        return (
            <div className="timeline-row-body" style={{ width: this.props.offsetWidth }}>
                TimelineRowBody
            </div>
        );
    }
}

export default TimelineRowBody;