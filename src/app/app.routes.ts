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
 
  // Employee List - Protected
  {
    path: 'employees',
    component: Employees,
    canActivate: [authGuard]
  },
 
  // Add Employee - Protected
  {
    path: 'add-employee',
    component: AddEmployee,
    canActivate: [authGuard]
  },
 
  // Edit Employee - Protected
  {
    path: 'add-employee/:id',
    component: AddEmployee,
    canActivate: [authGuard]
  },
 
  {
    path: 'login',
    component: Login
  },
 
  {
    path: 'employee-details/:id',
    component: EmployeeDetails
  },
 
  // Dashboard - Already Protected
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  }
 
];
 