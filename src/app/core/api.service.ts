import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  public launches: any[];
  public statuses: any[];
  private key = 'launches';
  constructor(private httpC: HttpClient) {
    // const launches = localStorage.getItem(this.key);
    // if (launches) {
    //   this.launches = JSON.parse(launches);

    this.getLaunches()
        .subscribe((res: any[]) => this.launches = res);
  }



    public getAgencies = (): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchagencies.json')
      .pipe(map((res: any) => res.agencies))

  public getMissionsTypes = (): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchmissions.json')
      .pipe(map((res: any) => res.types))

  public getStatusTypes = (): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchstatus.json')
      .pipe(map((res: any) => res.types))

//   public getLaunchs(): Observable<any> {
//     return this.httpC.get('../../assets/launchlibrary.json');
// }

  public getLaunches = (): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchlibrary.json')
      .pipe(map((res: any) => res.launches))

}
