export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor.name !== 'Building' && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
