import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(): boolean {
    if (this.authService.authenticated()) {
      return true
    } else {
      this.router.navigate(['/signIn']);
      return false
    }
  }
  
}
