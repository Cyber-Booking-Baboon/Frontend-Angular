import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSysAdminComponent } from './navbar-sys-admin.component';

describe('NavbarSysAdminComponent', () => {
  let component: NavbarSysAdminComponent;
  let fixture: ComponentFixture<NavbarSysAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSysAdminComponent]
    });
    fixture = TestBed.createComponent(NavbarSysAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
