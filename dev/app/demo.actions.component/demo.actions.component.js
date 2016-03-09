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

    // Move to a class
    this.actions = {
      circle: {
          viewState: 'CircleViewState',
          editState: 'CircleEditState',
          title: 'the circle'
      }
    };
  }

  onNavigate(to) {
    let target = this.actions[to];

    this._router.navigate(['DemoPanelComponent',{properties:target}]);
  }

}
