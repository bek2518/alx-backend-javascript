export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // getter
  get amount() {
    return this._amount;
  }

  // getter
  get currency() {
    return this._currency;
  }

  // setter
  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // setter
  set currency(currency) {
    this._currency = currency;
  }

  // method
  displayFullPrice() {
    return (`${this._amount} ${this.currency.displayFullCurrency()}`);
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
