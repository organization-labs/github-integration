import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DemoMainComponent} from '../demo.main.component/demo.main.component';
import {DemoHeaderComponent} from '../demo.header.component/demo.header.component';
import {DemoFooterComponent} from '../demo.footer.component/demo.footer.component';
import {DemoShapeCircleViewComponent} from '../demo.shape-circle.component/demo.shape-circle-view.component';
import {DemoPanelComponent} from '../demo.panel.component/demo.panel.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  directives:[DemoMainComponent, DemoHeaderComponent, DemoFooterComponent,ROUTER_DIRECTIVES],
  selector: 'demo-app',
  templateUrl: './demo.app.component/templates/demo.app.component.template.html'
})
@RouteConfig([
  {path: '/component-1', name: 'DemoPanelComponent', component: DemoPanelComponent}
])
export class DemoAppComponent {
}
