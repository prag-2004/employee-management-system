
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { EmployeeService } from '../services/employee';
import { Employee } from '../models/employee';
 
@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {
 
  employees: Employee[] = [];
 
  loading = true;
  errorMessage = '';
  successMessage = '';
 
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.loadEmployees();
  }
 
  loadEmployees(): void {
 
    this.loading = true;
    this.errorMessage = '';
 
    this.employeeService.getEmployees().subscribe({
 
      next: (data: Employee[]) => {
        this.employees = data;
        this.loading = false;
      },
 
      error: () => {
        this.errorMessage = 'Failed to load employees.';
        this.loading = false;
      }
 
    });
  }
 
  addEmployee(): void {
    this.router.navigate(['/add-employee']);
  }
 
  editEmployee(employee: Employee): void {
    this.router.navigate(['/add-employee'], {
      state: { employee: employee }
    });
  }
 
  viewEmployee(employee: Employee): void {
    this.router.navigate(['/employee-details', employee.id]);
  }
 
  deleteEmployee(employee: Employee): void {
 
    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );
 
    if (!confirmed) {
      return;
    }
 
    this.successMessage = '';
    this.errorMessage = '';
 
    try {
 
      this.employeeService.deleteEmployee(employee.id);
 
      this.successMessage =
        `${employee.name} deleted successfully.`;
 
    } catch {
 
      this.errorMessage =
        'Failed to delete employee. Please try again.';
    }
  }
}
 