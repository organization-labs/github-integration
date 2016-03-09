import {Component} from 'angular2/core';
import {DemoActionsComponent} from '../demo.actions.component/demo.actions.component';

@Component({
  directives: [DemoActionsComponent],
  selector: 'demo-header',
  templateUrl: './demo.header.component/templates/demo.header.component.template.html'
})

export class DemoHeaderComponent {

}
