import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DemoShapeCircleViewComponent} from '../demo.shape-circle.component/demo.shape-circle-view.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'demo-panel',
  templateUrl: './demo.panel.component/templates/demo.panel.component.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DemoPanelComponent {
  isEditing;
  routerParams;
  constructor(_routerParams: RouteParams) {
    this.routerParams = _routerParams;
  }

  ngOnInit() {
    this.isEditing = false;
    alert(this.routerParams.get('properties').title);
  }

  onEditValues() {
    this.isEditing = true;
  }

  onCancelEdit() {
    this.isEditing = false;
  }

}
