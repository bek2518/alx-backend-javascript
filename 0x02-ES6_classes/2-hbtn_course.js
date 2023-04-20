export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter
  get name() {
    return this._name;
  }

  // getter
  get length() {
    return this._length;
  }

  // getter
  get students() {
    return this._students;
  }

  // setter for name
  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // setter
  set length(length) {
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // setter
  set students(students) {
    this._students = students;
  }
}
