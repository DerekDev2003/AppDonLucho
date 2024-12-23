import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitchenOrdersPagePage } from './kitchen-orders-page.page';

describe('KitchenOrdersPagePage', () => {
  let component: KitchenOrdersPagePage;
  let fixture: ComponentFixture<KitchenOrdersPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenOrdersPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
