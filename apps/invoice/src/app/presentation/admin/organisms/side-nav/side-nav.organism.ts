import { Component } from '@angular/core';
import { adminRoutes } from '../../admin-routes';

@Component({
  selector: 'siste-side-nav',
  templateUrl: './side-nav.organism.html',
  styleUrls: ['./side-nav.organism.scss']
})
export class SideNavComponent {
  routes = adminRoutes;
  constructor() {
  }
}