import {Component} from 'angular2/core';
import {DemoShape} from '../demo.shape/demo.shape';

@Component({
  templateUrl: './demo.shape-circle-view.component/templates/demo.shape-circle-view.component.template.html'
})

export class DemoShapeCircleViewComponent extends DemoShape {
  constructor() {
    super();
    this.properties = Object.assign({}, {radio: 10});
  }

}
