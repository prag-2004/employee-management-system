import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class Auth {
 
  private isLoggedIn = false;
 
  login(email: string, password: string): boolean {
 
    if (email === 'admin@gmail.com' && password === '123456') {
      this.isLoggedIn = true;
      return true;
    }
 
    return false;
  }
 
  logout(): void {
    this.isLoggedIn = false;
  }
 
  checkLogin(): boolean {
    return this.isLoggedIn;
  }
 
}
 
