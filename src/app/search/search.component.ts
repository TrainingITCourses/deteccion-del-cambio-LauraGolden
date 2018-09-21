import { Component, AfterContentInit} from '@angular/core';
import { ApiService } from '../core/api.service';
import { ModoBusqueda } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterContentInit {
  private dataE: any[];
  private dataA: any[];
  private dataT: any[];
  public lanzamientos: any[];
  public lanFiltrados: any[] = [];
  public subCriterios: any[] = [];
  public seleccionado: ModoBusqueda;
  private criterioActual: ModoBusqueda;

  constructor(private api: ApiService) { }

  ngAfterContentInit() {
    this.seleccionado = 1;
    this.lanzamientos = [];
    console.log('ngAfterContentInit');
  }

  onCriterioSeleccionado = (criterioSel: ModoBusqueda) => {
    console.log('criterio seleccionado' + criterioSel);
    this.lanzamientos = [];
    this.subCriterios = [];
    this.criterioActual = criterioSel;
   switch (criterioSel) {
      case 1: // Estado
        this.getEstados();
        this.subCriterios = this.dataE;
        break;
      case 2: // Agencia
        this.getAgencias();
        this.subCriterios = this.dataA;
        break;
      case 3: // Tipo'
        this.getTipos();
        this.subCriterios = this.dataT;
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
    console.log('Busqueda por criterio seleccionado' + SubcriterioSel);
    const search: string = SubcriterioSel.toLowerCase();

    switch (this.criterioActual) {
      case 1: // Estado
          const filtroEstado = this.api.launches.filter(
            function (l) {
              let res: boolean;
              res = false;
              if (l.status !== undefined) {
                // tslint:disable-next-line:radix
                res = l.status === parseInt(search);
             }
             return res;
            }
          );
          this.lanzamientos = filtroEstado;
        break;
      case 2: // Agencia
        const filtroAgencia = this.api.launches.filter(
            function (l) {
                let res: boolean;
                res = false;
                if (l.rocket !== undefined && l.rocket !== null) {
                  if (l.rocket.agencies !== undefined && l.rocket.agencies !== null) {
                    if (l.rocket.agencies !== undefined && l.rocket.agencies !== null) {}
                    if (l.rocket.agencies.length !== null && l.rocket.agencies.length !== undefined) {
                      if (l.rocket.agencies.length > 0) {
                        // tslint:disable-next-line:radix
                        res = l.rocket.agencies[0].id === parseInt(search);
                      }
                    }
                  }
                }
                return res;
            }
        );
        this.lanzamientos = filtroAgencia;
        break;
      case 3: // Tipo'
        const filtroTipo = this.api.launches.filter(
            function (l) {
                let res: boolean;
                res = false;
                if (l.missions !== undefined) {
                  if (l.missions.length > 0) {
                    // tslint:disable-next-line:radix
                    res = l.missions[0].type === parseInt(search);
                  }
               }
               return res;
            }
        );
        this.lanzamientos = filtroTipo;

      break;
    }
  }
}
