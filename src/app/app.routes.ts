import { Routes } from '@angular/router';
 
import { Home } from './home/home';
import { Employees } from './employees/employees';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { AddEmployee } from './add-employee/add-employee';
import { authGuard } from './auth-guard';
import { EmployeeDetails } from './employee-details/employee-details';
 
export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    component: Home
  },
 
  {
    path: 'employees',
    component: Employees
  },
 
  {
    path: 'add-employee',
    component: AddEmployee
  },
 
  {
    path: 'login',
    component: Login
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetails
  },
 
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  }
 
];
 