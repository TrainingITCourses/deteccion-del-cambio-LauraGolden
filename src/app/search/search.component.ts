import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../services/api.service';
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
  @Input() public titulo: string;

  ngOnInit() {
    this.seleccionado = 0;
    this.lanzamientos = [];
    console.log('Search_ngOnInit');
  }

  onCriterioSeleccionado = (criterioSel: ModoBusqueda) => {
    console.log('criterio seleccionado: ' + criterioSel);
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
    console.log('Busqueda por criterio seleccionado: ' + SubcriterioSel);
    const search: number = parseInt(SubcriterioSel);
    switch (this.criterioActual) {
      case 1: // Estado
          const filtroEstado = this.api.launches.filter(
            function (l) {
              let res: boolean;
              res = false;
              if (l.status !== undefined) {
                res = l.status === search;
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
                        res = l.rocket.agencies[0].id === search;
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
                    res = l.missions[0].type === search;
                  }
               }
               return res;
            }
        );
        this.lanzamientos = filtroTipo;
      break;
      default:
        this.lanzamientos = [];
    }
  }
}
