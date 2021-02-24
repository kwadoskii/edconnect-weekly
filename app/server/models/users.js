const DataModel = require("./data_model");

class User {
  constructor(
    id,
    firstname,
    lastname,
    email,
    password,
    matricNumber,
    program,
    graduationYear
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.matricNumber = matricNumber;
    this.program = program;
    this.graduationYear = graduationYear;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Users extends DataModel {
  authenticate(email, password) {
    return this.data.filter((d) => d.email === email && d.password === password).length
      ? true
      : false;
  }

  getByEmail(email) {
    const requiredUser = this.data.filter((d) => d.email === email);
    return requiredUser.length ? requiredUser : null;
  }

  getByMatricNumber(matricNumber) {
    const requiredMatricNumber = this.data.filter((d) => d.matricNumber === matricNumber);
    return requiredMatricNumber.length ? requiredMatricNumber : null;
  }

  validate(obj) {
    let validator;

    for (let key in obj) {
      if (!obj[key]) {
        validator = false;
        break;
      } else {
        validator = true;
      }
    }

    if (this.data.filter((d) => d.email === obj.email).length) return false;

    if (this.data.filter((d) => d.matricNumber === obj.matricNumber).length) return false;

    if (obj.password.length < 6) return false;

    return validator;
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
  User,
  Users,
};
