import {Component, Input} from '@angular/core';

@Component({
  selector: 'tst-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent {

  @Input() name: string;

}
