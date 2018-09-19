import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.css']
})
export class CriterionComponent implements OnInit {
  criterio: string;
  @Output() public criterioSeleccionado = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }

  SelCriterio() {
    if (this.criterio !== '') {

    }
  }

}
