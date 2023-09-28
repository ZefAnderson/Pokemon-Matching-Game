import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTableComponent } from './kitchen-table.component';

describe('KitchenTableComponent', () => {
  let component: KitchenTableComponent;
  let fixture: ComponentFixture<KitchenTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenTableComponent]
    });
    fixture = TestBed.createComponent(KitchenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
