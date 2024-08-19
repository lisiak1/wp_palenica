import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingTourComponent } from './wedding-tour.component';

describe('WeddingTourComponent', () => {
  let component: WeddingTourComponent;
  let fixture: ComponentFixture<WeddingTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
