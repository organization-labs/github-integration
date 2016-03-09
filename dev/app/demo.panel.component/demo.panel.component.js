import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DemoShapeCircleComponent} from '../demo.shape-circle.component/demo.shape-circle.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'demo-panel',
  templateUrl: './demo.panel.component/templates/demo.panel.component.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DemoPanelComponent {
  isEditing;

  ngOnInit() {
    this.isEditing = false;
  }

  onEditValues() {
    this.isEditing = true;
  }

  onCancelEdit() {
    this.isEditing = false;
  }

}
