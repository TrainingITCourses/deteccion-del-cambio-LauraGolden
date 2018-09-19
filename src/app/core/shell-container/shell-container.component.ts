// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { ApiService } from '../store/api.service';

// @Component({
//   selector: 'app-shell-container',
//   templateUrl: './shell-container.component.html',
//   styleUrls: ['./shell-container.component.css']
// })
// export class ShellContainerComponent implements OnInit {
//   @Input() public appTitle;
//   public isHandset$: Observable<boolean>;
//   public nextLaunch: any;
//   public loaded = false;

//   constructor(
//     // private breakpointObserver: BreakpointObserver,
//     private api: ApiService,
//     private cdRef: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     // this.isHandset$ = this.breakpointObserver
//     //   .observe(Breakpoints.Handset)
//     //   .pipe(map(result => result.matches));
//     // this.api
//     //   .getLaunches$()
//     //   .subscribe(res =>
//     //     this.api.getStatusTypes$().subscribe(this.setDataAndUpdateViews)
//     //   );
//   }

//   private setDataAndUpdateViews = () => {
//     this.nextLaunch = this.api.launches
//       .filter(l => new Date(l.windowstart) > new Date())
//       .sort((a, b) => (a.isostart > b.isostart ? 1 : -1))
//       .slice(0, 1)[0];
//     setTimeout(() => {
//       this.loaded = true;
//       this.cdRef.detectChanges();
//     }, 3000);
//   };
// }
