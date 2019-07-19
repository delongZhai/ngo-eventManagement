import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <div class="col">
    <a [routerLink]="['/admin/user']" routerLinkActive="active"><strong>NGO</strong></a>
  </div>
  `,
  styles: [` 
  div.col{
    background: azure;
    width: 100%;
    height: 6.5%;
    margin-bottom: 3%;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0
  }

  div.col a {
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
