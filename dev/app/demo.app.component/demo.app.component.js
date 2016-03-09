import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {DemoMainComponent} from '../demo.main.component/demo.main.component';
import {DemoHeaderComponent} from '../demo.header.component/demo.header.component';
import {DemoFooterComponent} from '../demo.footer.component/demo.footer.component';
import {DemoShapeCircleComponent} from '../demo.shape-circle.component/demo.shape-circle.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  directives:[DemoMainComponent, DemoHeaderComponent, DemoFooterComponent,ROUTER_DIRECTIVES],
  selector: 'demo-app',
  templateUrl: './demo.app.component/templates/demo.app.component.template.html'
})
@RouteConfig([
  {path: '/component-1', name: 'DemoShapeCircleComponent', component: DemoShapeCircleComponent}
])
export class DemoAppComponent {
}
