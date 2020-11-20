import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdashboardComponent } from './techdashboard.component';

describe('TechdashboardComponent', () => {
  let component: TechdashboardComponent;
  let fixture: ComponentFixture<TechdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
