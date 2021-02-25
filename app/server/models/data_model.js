class DataModel {
  constructor() {
    this.data = [];
    this.requiredData = {};
  }

  getAll() {
    return this.data;
  }

  getById(id) {
    this.requireData = this.data.filter((d) => id === d.id);

    return this.requireData.length ? this.requireData[0] : null;
  }

  save(obj) {
    if (this.validate(obj)) {
      this.data.push(obj);
      return true;
    }
    return false;
  }

  update(obj, id) {
    this.requireData = this.data.filter((d, i) => {
      if (id === d.id) {
        for (let key in obj) {
          this.data[i][key] = obj[key];
        }
        return this.data[i];
      }
    });

    return this.requireData.length ? true : false;
  }

  delete(id) {
    let isDeleted;
    this.data.filter((d, i) => {
      if (id === d.id) {
        this.data.splice(i, 1);
        return (isDeleted = true);
      }
    });

    return isDeleted ? true : false;
  }

  // this method will be overriden in the sub classes
  validate(obj) {
    return false;
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;
