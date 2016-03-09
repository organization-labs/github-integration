import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DemoShapeCircleViewComponent} from '../demo.shape-circle.component/demo.shape-circle-view.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from 'angular2/router';
//TODO group import
import {Router} from 'angular2/router';

@Component({
  selector: 'demo-panel',
  templateUrl: './demo.panel.component/templates/demo.panel.component.template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class DemoPanelComponent {
  isEditing;
  routerParams;
  router;
  currentShape;
  constructor(_routerParams: RouteParams, _router: Router) {
    this.routerParams = _routerParams;
    this.router = _router;
  }

  ngOnInit() {
    this.isEditing = false;
    this.currentShape = this.routerParams.get('properties');
    alert(this.routerParams.get('properties').title);

    this.router.navigate(['CircleViewState']);
  }

  onEditValues() {
    this.isEditing = true;
  }

  onCancelEdit() {
    this.isEditing = false;
  }

}
