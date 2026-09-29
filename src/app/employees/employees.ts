import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
import { EmployeeService } from '../services/employee';
import { Employee } from '../models/employee';
 
@Component({
  selector: 'app-employees',
  imports: [FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {
 
  employees: Employee[] = [];
 
  totalEmployees = 0;
  totalDepartments = 0;
 
  loading = true;
  errorMessage = '';
  successMessage = '';
 
  searchText = '';
  selectedDepartment = '';
 
  departments: string[] = [];
 
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
 
        this.totalEmployees = data.length;
 
        this.totalDepartments = new Set(
          data.map(employee => employee.department)
        ).size;
 
        this.departments = [
          ...new Set(
            data.map(employee => employee.department)
          )
        ];
 
        this.loading = false;
      },
 
      error: () => {
 
        this.errorMessage = 'Failed to load employees.';
        this.loading = false;
 
      }
 
    });
  }
 
  get filteredEmployees(): Employee[] {
 
    const search = this.searchText.trim().toLowerCase();
 
    return this.employees.filter(employee => {
 
      const matchesName =
        employee.name.toLowerCase().includes(search);
 
      const matchesDepartment =
        !this.selectedDepartment ||
        employee.department === this.selectedDepartment;
 
      return matchesName && matchesDepartment;
 
    });
  }
 
  addEmployee(): void {
    this.router.navigate(['/add-employee']);
  }
 
  editEmployee(employee: Employee): void {
    this.router.navigate(['/add-employee', employee.id]);
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