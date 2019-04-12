import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorganisationComponent } from './editorganisation.component';

describe('EditorganisationComponent', () => {
  let component: EditorganisationComponent;
  let fixture: ComponentFixture<EditorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
