import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ApiService } from '../core/api.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private dataE: any[];
  public dataA: any[];
  private dataT: any[];
  public lanzamientos: any[];
  public lanFiltrados: any[] = [];
  public subCriterios: any[] = [];
  public seleccionado: string;
  private criterioActual: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.seleccionado = '';
  }


  onCriterioSeleccionado = (criterioSel: any) => {
    switch (criterioSel) {
      case 'Vacio':
        this.subCriterios = [];
        this.criterioActual = 'Vacio';
        break;
      case 'Estado':
        this.getEstados();
        this.subCriterios = this.dataE;
        this.criterioActual = 'Estado';
        break;
      case 'Agencia':
        this.getAgencias();
        this.subCriterios = this.dataA;
        this.criterioActual = 'Agencia';
        break;
      case 'Tipo':
        break;
    }
  }

  getAgencias = () => {
    this.api
      .getAgencies()
      .subscribe((res: any[]) => this.subCriterios = res);
      // if (this.dataA === undefined) {
      //   this.dataA = [];
      // }
  }
  getEstados = () => {
    this.api
      .getStatusTypes$()
      .subscribe((res: any[]) => this.dataE = res);
      if (this.dataE === undefined) {
        this.dataE = [];
      }
  }

  onSubCriterioSeleccionado = (SubcriterioSel: any) => {
    const search = SubcriterioSel.toLowerCase();

    switch (this.criterioActual) {
      case 'Vacio':
      break;
      case 'Estado':
      break;
      case 'Agencia':
      const filteredLaunches = this.api.launches.filter(
        l =>
          l.name.toLowerCase().includes(search) ||
          l.location.name.toLowerCase().includes(search)
      );
      this.lanzamientos = filteredLaunches;
      break;
      case 'Tipo':
      break;
    }
  }

  onFiltrar = (searchText: string) => {
    const search = searchText.toLowerCase();
    const filteredLaunches = this.api.launches.filter(
      l =>
        l.name.toLowerCase().includes(search) ||
        l.location.name.toLowerCase().includes(search)
    );

    // this.filteredLaunches = filteredLaunches;
  };

}
