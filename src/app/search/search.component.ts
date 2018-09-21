import { Component, OnInit} from '@angular/core';
import { ApiService } from '../core/api.service';
import { ModoBusqueda } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiService]
})
export class SearchComponent implements OnInit {
  public lanzamientos: any[];
  public lanFiltrados: any[] = [];
  public a_subCriterios: any[] = [];
  public seleccionado: ModoBusqueda;
  private criterioActual: ModoBusqueda;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.seleccionado = 1;
    this.lanzamientos = [];
    console.log('ngAfterContentInit');
  }

  onCriterioSeleccionado = (criterioSel: ModoBusqueda) => {
    console.log('criterio seleccionado' + criterioSel);
    this.criterioActual = criterioSel;
   switch (criterioSel) {
      case 1: // Estado
        this.api
        .getStatusTypes()
        .subscribe((res: any[]) => this.a_subCriterios = res);
        break;
      case 2: // Agencia
        this.api
        .getAgencies()
        .subscribe((res: any[]) => this.a_subCriterios = res);
        break;
      case 3: // Tipo'
        this.api
        .getMissionsTypes()
        .subscribe((res: any[]) => this.a_subCriterios = res);
        break;
      default:
        this.a_subCriterios = [];
    }
    this.lanzamientos = [];
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
