import _ from "lodash";
import moment from "moment";

class FakeService {
  constructor() {}

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cellHeaders = this.generateCellHeaders();
        const cellContents = this.generateCellBody();

        resolve({
          cellHeaders,
          cellContents
        });
      }, 500);
    });
  }

  generateCellHeaders() {
    const cellHeaders = [];
    _.map(_.repeat("*", 20).split(""), (val, idx) => {
      cellHeaders.push({
        id: idx,
        name: `test${idx}`,
        email: `test${idx}@test.com`
      });
    });
    return cellHeaders;
  }

  generateCellBody() {
    const cellBody = [];
    _.map(_.repeat("*", 5).split(""), (val, idx) => {
      cellBody.push({
        id: idx,
        headerId: 2,
        startDate: moment().subtract(idx, "weeks"),
        endDate: moment().add(idx, "weeks"),
        name: `fake body ${idx}`
      });
    });

    _.map(_.repeat("*", 4).split(""), (val, idx) => {
      cellBody.push({
        id: idx + 5,
        headerId: 4,
        startDate: moment().subtract(idx, "days"),
        endDate: moment().add(idx, "weeks"),
        name: `fake body ${idx}`
      });
    });

    return cellBody;
  }
}

export default FakeService;
