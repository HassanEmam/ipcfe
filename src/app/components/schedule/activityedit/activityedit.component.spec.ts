import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityeditComponent } from './activityedit.component';

describe('ActivityeditComponent', () => {
  let component: ActivityeditComponent;
  let fixture: ComponentFixture<ActivityeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
