import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitieslistComponent } from './activitieslist.component';

describe('ActivitieslistComponent', () => {
  let component: ActivitieslistComponent;
  let fixture: ComponentFixture<ActivitieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
