import { ModoBusqueda } from '../../app.component';
import { Component, AfterContentInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.css']
})
export class CriterionComponent implements AfterContentInit {
  @Input() public subCriterios: any[];
  @Input() public seleccionado = '';
  @Output() public criterioSeleccionado = new EventEmitter<number>();
  @Output() public subCriterioSeleccionado = new EventEmitter<string>();

  textoSeleccion: string;
  constructor() { }

  ngAfterContentInit() {
    // this.textoSeleccion = 'un estado';
  }

  @Input()
  get value() {
    return this.seleccionado;
  }
  set value(val) {
    this.seleccionado = val;
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
    // tslint:disable-next-line:radix
    modo = parseInt($event.srcElement.value);
    this.criterioSeleccionado.next(modo);
  }

  SelSubCriterio($event) {
    this.subCriterioSeleccionado.next($event.srcElement.value);
  }
}
