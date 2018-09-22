import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  public launches: any[];
  public statuses: any[];
  private key = 'launches';
  constructor(private httpC: HttpClient) {
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

  public getLaunches = (): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchlibrary.json')
      .pipe(map((res: any) => res.launches))

}
