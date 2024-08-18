import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownDateComponent } from './count-down-date.component';

describe('CountDownDateComponent', () => {
  let component: CountDownDateComponent;
  let fixture: ComponentFixture<CountDownDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountDownDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
