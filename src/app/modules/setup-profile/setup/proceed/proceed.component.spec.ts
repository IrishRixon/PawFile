import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedComponent } from './proceed.component';

describe('ProceedComponent', () => {
  let component: ProceedComponent;
  let fixture: ComponentFixture<ProceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
