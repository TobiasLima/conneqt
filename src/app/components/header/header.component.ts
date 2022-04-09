import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMobilePhone$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(min-width: 769px)')) {
      console.info('Teste');
    }
    this.isMobilePhone$ = this.breakpointObserver
      .observe('(min-width: 768px)')
      .pipe(map((result) => !result.matches));
  }
}
