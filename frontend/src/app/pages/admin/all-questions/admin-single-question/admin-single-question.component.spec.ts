import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleQuestionComponent } from './admin-single-question.component';

describe('AdminSingleQuestionComponent', () => {
  let component: AdminSingleQuestionComponent;
  let fixture: ComponentFixture<AdminSingleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminSingleQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSingleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
