import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class Auth {
 
  private isLoggedIn =
    localStorage.getItem('isLoggedIn') === 'true';
 
  login(email: string, password: string): boolean {
 
    if (email === 'admin@gmail.com' && password === '123456') {
 
      this.isLoggedIn = true;
 
      localStorage.setItem('isLoggedIn', 'true');
 
      return true;
    }
 
    return false;
  }
 
  logout(): void {
 
    this.isLoggedIn = false;
 
    localStorage.removeItem('isLoggedIn');
  }
 
  checkLogin(): boolean {
    return this.isLoggedIn;
  }
 
}
 