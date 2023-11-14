import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegrendelesComponent } from './megrendeles.component';

describe('MegrendelesComponent', () => {
  let component: MegrendelesComponent;
  let fixture: ComponentFixture<MegrendelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MegrendelesComponent]
    });
    fixture = TestBed.createComponent(MegrendelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
