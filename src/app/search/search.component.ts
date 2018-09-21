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
  private dataA: any[];
  private dataT: any[];
  public lanzamientos: any[];
  public lanFiltrados: any[] = [];
  public subCriterios: any[] = [];
  public seleccionado: string;
  private criterioActual: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.seleccionado = '';
    this.lanzamientos = [];
    console.log('OnInitSearch');
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
        this.getTipos();
        this.subCriterios = this.dataT;
        this.criterioActual = 'Tipo';
        break;
    }
  }

  getAgencias = () => {
    this.api
      .getAgencies()
      .subscribe((res: any[]) => this.dataA = res);
  }
  getEstados = () => {
    this.api
      .getStatusTypes$()
      .subscribe((res: any[]) => this.dataE = res);
  }

  getTipos = () => {
    this.api
      .getMissionTypes()
      .subscribe((res: any[]) => this.dataT = res);
  }

  onSubCriterioSeleccionado = (SubcriterioSel: any) => {
    const search: string = SubcriterioSel.toLowerCase();

    switch (this.criterioActual) {
      case 'Vacio':
      break;
      case 'Estado':
          const filtroEstado = this.api.launches.filter(
            l =>
              // l.name.toLowerCase().includes(search) ||
              // l.location.name.toLowerCase().includes(search)
              // tslint:disable-next-line:radix
              l.status === parseInt(search)
          );
          this.lanzamientos = filtroEstado;
        break;
      case 'Agencia':
        const filtroAgencia = this.api.launches.filter(
          l =>
            // l.name.toLowerCase().includes(search) ||
            // l.location.name.toLowerCase().includes(search)
            // tslint:disable-next-line:radix
            l.rocket.agencies[0].id === parseInt(search)
        );
        this.lanzamientos = filtroAgencia;
        break;
      case 'Tipo':
        const filtroTipo = this.api.launches.filter(
            function (l) {
                if (l.missions !== undefined) {
                  if (l.missions.length > 0) {
                    // tslint:disable-next-line:radix
                    return l.missions[0].type === parseInt(search);
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
            }
        );
        this.lanzamientos = filtroTipo;

      break;
    }
  }
}
