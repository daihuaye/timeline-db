import moment from 'moment';

const PIXELS_PER_BOX: number = 120;

class BaseTimelineManager {
    /**
     * Get width for day (7/14/30)
     * defalut value is 7;
     */
    getDayWidth() {
        return 7;
    }

    getPixelsPerDay() {
        return PIXELS_PER_BOX / this.getDayWidth();
    }

    getOffsetFromDuration(duration) {
        return duration * this.getPixelsPerDay();
    }

    getDateFromOffset(date, offset) {
        return moment(date).add(Math.round(offset / this.getPixelsPerDay()), 'days');
    }

    getOffsetBetween(startDate, endDate) {
        return Math.abs(startDate.diff(endDate, 'days')) * this.getPixelsPerDay();
    }
}

export default BaseTimelineManager;