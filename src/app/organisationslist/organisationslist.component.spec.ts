import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationslistComponent } from './organisationslist.component';

describe('OrganisationslistComponent', () => {
  let component: OrganisationslistComponent;
  let fixture: ComponentFixture<OrganisationslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
