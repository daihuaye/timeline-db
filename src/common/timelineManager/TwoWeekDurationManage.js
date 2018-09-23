import BaseTimelineManager from './BaseTimelineManager';

class TwoWeekDurationManager extends BaseTimelineManager {
    getDayWidth() {
        return 14;
    }

    getDuration() {
        return 'week';
    }
}

export default TwoWeekDurationManager;