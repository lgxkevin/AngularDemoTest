import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNoDataComponent } from './demo-no-data.component';

describe('DemoNoDataComponent', () => {
  let component: DemoNoDataComponent;
  let fixture: ComponentFixture<DemoNoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
