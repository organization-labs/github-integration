import {Component} from 'angular2/core';
import {DemoPanelComponent} from '../demo.panel.component/demo.panel.component';

//styleUrls: ['./demo.survey.component/less/demo.survey.component.css'],

@Component({
  selector: 'demo-main',
  templateUrl: './demo.main.component/templates/demo.main.component.html',
  directives: [DemoPanelComponent]
})
export class DemoMainComponent {
  constructor() {
    this.name = 'Maximilian';
  }
}
