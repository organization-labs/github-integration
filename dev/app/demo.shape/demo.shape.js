
export class DemoShape {
  properties;

  constructor()  {
    this.properties = Object.assign({}, {location: {x:0, y:0}});
  }

  getSvg() {
    throw new Error('Method getSvg Not implemented yet');
  }

  get location() {
    return this.location;
  }

  set location(value) {
    this.location = value;
  }


}
