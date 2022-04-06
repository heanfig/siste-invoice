import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInteractor } from '../../../../core/auth.interactor';

@Component({
  selector: 'siste-top-nav',
  templateUrl: './top-nav.organism.html',
  styleUrls: ['./top-nav.organism.scss']
})
export class TopNavComponent {
  @Output() sideNavToggled = new EventEmitter<void>();

  constructor(private readonly router: Router, 
    private interactor: AuthInteractor) {}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  async onLoggedout() {
    await this.interactor.signOut();
    localStorage.removeItem('userdata');
    this.router.navigate(['/auth/login']);
  }
}