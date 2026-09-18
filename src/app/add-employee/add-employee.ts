import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
 
import { EmployeeService } from '../services/employee';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {
 
  employeeForm = new FormGroup({
 
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
 
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
 
    department: new FormControl('', [
      Validators.required
    ]),
 
    role: new FormControl('', [
      Validators.required
    ]),
 
    joiningDate: new FormControl('', [
      Validators.required
    ])
 
  });
 
  successMessage = '';
  errorMessage = '';
 
  editingEmployee: Employee | null = null;
 
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
 
    const navigation = this.router.getCurrentNavigation();
 
    const employee =
      navigation?.extras.state?.['employee'] as Employee | undefined;
 
    if (employee) {
 
      this.editingEmployee = employee;
 
      this.employeeForm.patchValue({
        name: employee.name,
        email: employee.email,
        department: employee.department,
        role: employee.role,
        joiningDate: employee.joiningDate
      });
    }
  }
 
  onSubmit(): void {
 
    this.successMessage = '';
    this.errorMessage = '';
 
    if (this.employeeForm.invalid) {
 
      this.employeeForm.markAllAsTouched();
 
      this.errorMessage = 'Please fix the validation errors.';
 
      return;
    }
 
    const formValue = this.employeeForm.value;
 
    // EDIT EMPLOYEE
    if (this.editingEmployee) {
 
      const updatedEmployee: Employee = {
 
        id: this.editingEmployee.id,
 
        name: formValue.name ?? '',
 
        email: formValue.email ?? '',
 
        department: formValue.department ?? '',
 
        role: formValue.role ?? '',
 
        joiningDate: formValue.joiningDate ?? ''
 
      };
 
      this.employeeService.updateEmployee(updatedEmployee);
 
      this.successMessage = 'Employee updated successfully!';
 
      setTimeout(() => {
 
        this.router.navigate(['/employees']);
 
      }, 1000);
 
      return;
    }
 
    // ADD EMPLOYEE
    const newEmployee: Employee = {
 
      id: Date.now(),
 
      name: formValue.name ?? '',
 
      email: formValue.email ?? '',
 
      department: formValue.department ?? '',
 
      role: formValue.role ?? '',
 
      joiningDate: formValue.joiningDate ?? ''
 
    };
 
    this.employeeService.addEmployee(newEmployee);
 
    this.successMessage = 'Employee added successfully!';
 
    this.employeeForm.reset();
  }
}
 