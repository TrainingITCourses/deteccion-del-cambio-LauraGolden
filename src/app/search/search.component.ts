import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/store/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public lanzamientos: any[];
  public lanFiltrados: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {

  }


  onCriterioSeleccionado = (criterioSel: string) => {
    const criterio = criterioSel.toLowerCase();
    const filteredLaunches = this.api.launches.filter(
      l =>
        l.name.toLowerCase().includes(criterio) ||
        l.location.name.toLowerCase().includes(criterio)
    );
    // this.clearAndPush(filteredLaunches);
    // this.filteredLaunches = filteredLaunches;
  };
}
