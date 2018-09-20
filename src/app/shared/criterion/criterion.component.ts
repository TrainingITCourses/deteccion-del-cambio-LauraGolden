import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.css']
})
export class CriterionComponent implements OnInit {
  @Input() public subCriterios: any[];
  @Input() public seleccionado = '';
  @Output() public criterioSeleccionado = new EventEmitter<string>();
  @Output() public subCriterioSeleccionado = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }

  SelCriterio($event) {
    this.criterioSeleccionado.next($event.srcElement.value);
  }

  SelSubCriterio($event) {
    this.subCriterioSeleccionado.next($event.srcElement.value);
  }
}
