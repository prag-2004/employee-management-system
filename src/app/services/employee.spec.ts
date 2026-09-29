import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee';
 
describe('EmployeeService', () => {
  let service: EmployeeService;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
 
    service = TestBed.inject(EmployeeService);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});