import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocheckComponent } from './democheck.component';

describe('DemocheckComponent', () => {
  let component: DemocheckComponent;
  let fixture: ComponentFixture<DemocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
