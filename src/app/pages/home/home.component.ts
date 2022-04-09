import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  resellers = [
    {
      location: 'Global Reseller',
      items: [
        {
          name: 'John Appleseed - Authorized Reseller',
          website: '#',
          phone: '469-844-8261',
        },
      ],
    },
    {
      location: 'Brazil',
      items: [
        {
          name: 'Ultratech Revendedora',
          website: '#',
          phone: '469-844-8261',
        },
        {
          name: 'BlueFin',
          website: '#',
          phone: '469-844-8261',
        },
        {
          name: 'Gold Comm Sistemas',
          website: '#',
          phone: '469-844-8261',
        },
        {
          name: 'Centraltek',
          website: '#',
          phone: '469-844-8261',
        },
      ],
    },
  ];
}
