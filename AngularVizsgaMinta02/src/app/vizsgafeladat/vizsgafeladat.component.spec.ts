import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgafeladatComponent } from './vizsgafeladat.component';

describe('VizsgafeladatComponent', () => {
  let component: VizsgafeladatComponent;
  let fixture: ComponentFixture<VizsgafeladatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VizsgafeladatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VizsgafeladatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
