import React, { Component } from 'react';
import './TimelineCellBody.css';

class TimelineCellBody extends Component {
    render() {
        return (
            <div className="timeline-cell-body" style={{ width: this.props.offsetWidth }}>
                TimelineCellBody
            </div>
        );
    }
}

export default TimelineCellBody;