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
  @Output() public SubcriterioSeleccionado = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }

  SelCriterio($event) {
    this.criterioSeleccionado.next($event.srcElement.value);
  }

  SelSubCriterio($event) {
    this.SubcriterioSeleccionado.next($event.srcElement.value);
  }
}
