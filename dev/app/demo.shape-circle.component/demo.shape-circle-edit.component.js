import {Component} from 'angular2/core';
import {DemoShape} from '../demo.shape/demo.shape';

@Component({
  templateUrl: './demo.shape-circle-component/templates/demo.shape-circle-edit.component.template.html'
})

// TODO Extend Circle
export class DemoShapeCircleEditComponent extends DemoShape {
  constructor() {
    super();
    this.properties = Object.assign({}, {radio: 10});
  }

}
