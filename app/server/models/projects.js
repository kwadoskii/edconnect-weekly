const DataModel = require("./data_model");

class Project {
  constructor(id, name, abstract, authors, tags, createdBy) {
    this.id = id;
    this.name = name;
    this.abstract = abstract;
    this.authors = authors;
    this.tags = tags;
    this.createdBy = createdBy;
  }
}

class Projects extends DataModel {
  validate(obj) {
    let validator;

    for (let key in obj) {
      if (!obj[key]) {
        validator = false;
        break;
      } else if (Array.isArray(obj[key]) && obj[key].length <= 0) {
        validator = false;
        break;
      } else {
        validator = true;
      }
    }

    if (!Array.isArray(obj.authors) || !Array.isArray(obj.tags)) return false;

    return validator;
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
  Project,
  Projects,
};
