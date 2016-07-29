import {Component, AfterViewChecked} from 'angular2/core';
import {SidebarComponent} from "./sidebar.component";
import {FooterComponent} from "./footer.component";
import {ProjectsComponent} from "./projects.component";
import 'assets/sass/style.scss!';

@Component({
  selector: 'app',
  directives: [SidebarComponent, FooterComponent, ProjectsComponent],
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements AfterViewChecked {
  constructor() { }

  ngAfterViewChecked() {
  		
  }
}

