import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodMenuPagePage } from './food-menu-page.page';

describe('FoodMenuPagePage', () => {
  let component: FoodMenuPagePage;
  let fixture: ComponentFixture<FoodMenuPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
