import {
  ChangeDetectionStrategy,
  Component,
  Input,
  AfterContentInit
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements AfterContentInit {
  @Input() public lanzamientos: any[];
  constructor() {}

  ngAfterContentInit() {}
}
