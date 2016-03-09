import {Component} from 'angular2/core';
import {DemoShape} from '../demo.shape/demo.shape';

@Component({
  templateUrl: './demo.shape-circle.component/templates/demo.shape-circle.component.template.html'
})

export class DemoShapeCircleComponent extends DemoShape {
  constructor() {
    super();
    this.properties = Object.assign({}, {radio: 10});
  }

}
