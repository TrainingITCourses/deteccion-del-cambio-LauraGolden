import { ModoBusqueda } from '../../app.component';
import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.css']
})
export class CriterionComponent implements OnInit {
  @Input() public subCriterios: any[];
  @Input() public seleccionado = 0;
  @Output() public criterioSeleccionado = new EventEmitter<number>();
  @Output() public subCriterioSeleccionado = new EventEmitter<string>();
  private _seleccionadoSubC = '';

  textoSeleccion: string;
  constructor() { }

  ngOnInit() {
    this.seleccionado = 0;
  }

  SelCriterio($event) {
    let modo: ModoBusqueda;

    if ($event.srcElement.value === '1') {
      this.textoSeleccion = 'un estado';
    } else if ($event.srcElement.value === '2') {
      this.textoSeleccion = 'una agencia';
    } else {
      this.textoSeleccion = 'un tipo de misión';
    }
    this.subCriterios = [];
    // tslint:disable-next-line:radix
    modo = parseInt($event.srcElement.value);
    this.criterioSeleccionado.next(modo);
  }

  SelSubCriterio($event) {
    this.subCriterioSeleccionado.next($event.srcElement.value);
  }

  get seleccionadoSubC() {
    return this._seleccionadoSubC;
  }
  set seleccionadoSubC(newObj) {
      this._seleccionadoSubC = newObj;
      this.SelSubCriterio(newObj);
  }
}
