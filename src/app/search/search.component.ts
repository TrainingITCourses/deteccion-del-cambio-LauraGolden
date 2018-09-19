import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private _data: any[];
  public lanzamientos: any[];
  public lanFiltrados: any[] = [];
  public subCriterios: any[] = [];
  public seleccionado: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.seleccionado = '';
  }


  onCriterioSeleccionado = (criterioSel: any) => {
    switch (criterioSel) {
      case 'Vacio':
        this.subCriterios = [];
        break;
      case 'Estado':
        this.getEstados();
        this.subCriterios = this._data;
        break;
      case 'Agencia':
        this.getAgencys();
        this.subCriterios = this._data;
        break;
        break;
      case 'Tipo':
        break;
    }
  }

  getAgencys = () => {
    this.api
      .getAgencies()
      .subscribe((res: any[]) => this._data = res);
  }
  getEstados = () => {
    this.api
      .getStatusTypes$()
      .subscribe((res: any[]) => this._data = res);
  }


  onSubCriterioSeleccionado = (SubcriterioSel: any) => {

  }
}
