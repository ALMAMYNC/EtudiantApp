import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClsDetailsComponent } from './cls-details.component';

describe('ClsDetailsComponent', () => {
  let component: ClsDetailsComponent;
  let fixture: ComponentFixture<ClsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
