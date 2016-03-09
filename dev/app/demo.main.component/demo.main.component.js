import {Component} from 'angular2/core';
import {DemoPanelComponent} from '../demo.panel.component/demo.panel.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
  selector: 'demo-main',
  templateUrl: './demo.main.component/templates/demo.main.component.html',
  directives: [DemoPanelComponent, ROUTER_DIRECTIVES]
})
export class DemoMainComponent {
  constructor() {
    this.name = 'Maximilian';
  }
}
