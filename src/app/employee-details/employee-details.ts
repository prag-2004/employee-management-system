import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import { EmployeeService } from '../services/employee';
import { Employee } from '../models/employee';
 
@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails implements OnInit {
 
  employee: Employee | undefined;
 
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
 
    const id = Number(this.route.snapshot.paramMap.get('id'));
 
    this.employeeService.getEmployees().subscribe({
 
      next: (employees: Employee[]) => {
 
        this.employee = employees.find(
          employee => employee.id === id
        );
 
      }
 
    });
  }
 
  goBack(): void {
    this.router.navigate(['/employees']);
  }
}
 