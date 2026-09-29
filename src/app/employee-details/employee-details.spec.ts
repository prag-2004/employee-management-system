import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetails } from './employee-details';
 
import { ActivatedRoute, Router } from '@angular/router';
import { vi } from 'vitest';
 
describe('EmployeeDetails', () => {
 
  let component: EmployeeDetails;
  let fixture: ComponentFixture<EmployeeDetails>;
 
  beforeEach(async () => {
 
    await TestBed.configureTestingModule({
 
      imports: [EmployeeDetails],
 
      providers: [
 
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        },
 
        {
          provide: Router,
          useValue: {
            navigate: vi.fn()
          }
        }
 
      ]
 
    }).compileComponents();
 
    fixture = TestBed.createComponent(EmployeeDetails);
    component = fixture.componentInstance;
 
    fixture.detectChanges();
 
  });
 
  it('should create', () => {
 
    expect(component).toBeTruthy();
 
  });
 
});
 