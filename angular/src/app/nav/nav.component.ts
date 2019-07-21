import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav mat-tab-nav-bar class="navbar navbar-light bg-light">
   <div class="container">
    <a class="navbar-brand" [routerLink]="['/admin/user']" routerLinkActive="active"><strong>NGO</strong></a>

    <a mat-tab-link [routerLink]="['/adminUser']" routerLinkActive="active">User Management</a>
    <a mat-tab-link [routerLink]="['/adminEvent']" routerLinkActive="active">Event Management</a>
    <a mat-tab-link [routerLink]="['/adminView']" routerLinkActive="active">User View</a>
   </div>
  </nav>
  `,
  styles: [` 
  nav.navbar{
    width: 100%;
    margin-bottom: 3%;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 100;
  }

  div.col a {
    float: left
    vertical-align: center;
    font-size: 2em;
    color: #000000;
    position: relative;
    left: 50px;
  }

  div.col a:hover {
      text-decoration: none;
  }`]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
