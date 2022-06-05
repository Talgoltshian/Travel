import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminButtonsPermissionComponent } from './admin-buttons-permission.component';

describe('AdminButtonsPermissionComponent', () => {
  let component: AdminButtonsPermissionComponent;
  let fixture: ComponentFixture<AdminButtonsPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminButtonsPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminButtonsPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
