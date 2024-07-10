import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzavazatokComponent } from './szavazatok.component';

describe('SzavazatokComponent', () => {
  let component: SzavazatokComponent;
  let fixture: ComponentFixture<SzavazatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SzavazatokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzavazatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
