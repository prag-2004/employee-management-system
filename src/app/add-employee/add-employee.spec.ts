import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEmployee } from './add-employee';
 
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
 
describe('AddEmployee', () => {
 
  let component: AddEmployee;
  let fixture: ComponentFixture<AddEmployee>;
 
  beforeEach(async () => {
 
    await TestBed.configureTestingModule({
 
      imports: [AddEmployee],
 
      providers: [
 
        provideRouter([]),
 
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
 
      ]
 
    }).compileComponents();
 
    fixture = TestBed.createComponent(AddEmployee);
    component = fixture.componentInstance;
 
    fixture.detectChanges();
 
  });
 
  it('should create', () => {
 
    expect(component).toBeTruthy();
 
  });
});