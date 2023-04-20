export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter
  get code() {
    return this._code;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set code(code) {
    if (typeof (code) === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // setter
  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // method
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
