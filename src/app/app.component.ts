import { Component } from '@angular/core';
import { UserLightMapping } from 'src/light-validate/user.light-mapping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'light-validate-angular-ui';

  constructor() { }

  public lightRuleMapping = UserLightMapping;

  public appModel: Partial<UserLightMapping> = {};


}
