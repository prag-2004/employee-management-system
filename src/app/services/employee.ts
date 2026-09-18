import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Aarav Sharma',
      email: 'aarav@gmail.com',
      department: 'IT',
      role: 'Software Developer',
      joiningDate: '2026-01-10'
    },
    {
      id: 2,
      name: 'Priya Patil',
      email: 'priya@gmail.com',
      department: 'Design',
      role: 'UI Developer',
      joiningDate: '2026-02-15'
    },
    {
      id: 3,
      name: 'Rahul Deshmukh',
      email: 'rahul@gmail.com',
      department: 'Management',
      role: 'Project Manager',
      joiningDate: '2026-03-01'
    },
    {
      id: 4,
      name: 'Sneha Kulkarni',
      email: 'sneha@gmail.com',
      department: 'HR',
      role: 'HR Executive',
      joiningDate: '2026-03-20'
    },
    {
      id: 5,
      name: 'Aditya Joshi',
      email: 'aditya@gmail.com',
      department: 'Testing',
      role: 'Software Tester',
      joiningDate: '2026-04-05'
    }
  ];
 
  private employeeSubject =
    new BehaviorSubject<Employee[]>(this.employees);
 
  getEmployees(): Observable<Employee[]> {
    return this.employeeSubject.asObservable();
  }
 
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
 
    this.employeeSubject.next([...this.employees]);
  }
 
  updateEmployee(updatedEmployee: Employee): void {
    console.log('UPDATE CALLED:', updatedEmployee.id);
 
    const index = this.employees.findIndex(
      employee => employee.id === updatedEmployee.id
    );
 
    if (index !== -1) {
      this.employees[index] = { ...updatedEmployee };
 
      this.employeeSubject.next([...this.employees]);
    }
  }
 
  deleteEmployee(id: number): void {
    const index = this.employees.findIndex(
      employee => employee.id === id
    );
 
    if (index !== -1) {
      this.employees.splice(index, 1);
 
      this.employeeSubject.next([...this.employees]);
    }
  }
}
 