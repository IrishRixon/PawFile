import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMessageComponent } from './profile-message.component';

describe('ProfileMessageComponent', () => {
  let component: ProfileMessageComponent;
  let fixture: ComponentFixture<ProfileMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
