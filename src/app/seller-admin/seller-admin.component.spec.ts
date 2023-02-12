import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAdminComponent } from './seller-admin.component';

describe('SellerAdminComponent', () => {
  let component: SellerAdminComponent;
  let fixture: ComponentFixture<SellerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
