import BaseTimelineManager from './BaseTimelineManager';

class WeekDurationManager extends BaseTimelineManager {
    getDayWidth() {
        return 7;
    }

    getDuration() {
        return 'week';
    }
}

export default WeekDurationManager;