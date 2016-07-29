import {Component, Input} from 'angular2/core';
import 'assets/sass/projects.scss!';

@Component({
  selector: 'projects',
  templateUrl: 'app/projects.component.html'
})
export class ProjectsComponent {
  @Input('data') projects: string[] = [];
}
