import BaseTimelineManager from "./BaseTimelineManager";

class WeekDurationManager extends BaseTimelineManager {
  getDayWidth() {
    return 7;
  }

  getDuration() {
    return "week";
  }

  getDisplayDate(date) {
    return date.format("MMM D");
  }
}

export default WeekDurationManager;
