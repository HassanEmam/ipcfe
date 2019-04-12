import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetorganisationComponent } from './getorganisation.component';

describe('GetorganisationComponent', () => {
  let component: GetorganisationComponent;
  let fixture: ComponentFixture<GetorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
