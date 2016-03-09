import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';

@Component({
  selector: 'demo-actions',
  templateUrl: './demo.actions.component/templates/demo.actions.component.template.html',
  directives: [ROUTER_DIRECTIVES]
})

export class DemoActionsComponent {
  _router;
  constructor(router: Router) {
    this._router = router;

    this.actions = {
      circle: {
        componentName: 'DemoPanelComponent',
        properties: {
          title: 'the circle'
        }
      }
    };
  }

  onNavigate(to) {
    let target = this.actions[to];

    // TODO include actions
    this._router.navigate([target.componentName,{properties:target.properties}]);
  }

}
