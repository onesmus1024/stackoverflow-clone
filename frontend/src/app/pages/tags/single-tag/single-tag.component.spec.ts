import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTagComponent } from './single-tag.component';

describe('SingleTagComponent', () => {
  let component: SingleTagComponent;
  let fixture: ComponentFixture<SingleTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingleTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
