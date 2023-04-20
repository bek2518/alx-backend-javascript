import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // getter
  get floors() {
    return this._floors;
  }

  // setter
  set floors(floors) {
    this._floors = floors;
  }

  // setter
  set sqft(sqft) {
    this._sqft = sqft;
  }

  // method
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
