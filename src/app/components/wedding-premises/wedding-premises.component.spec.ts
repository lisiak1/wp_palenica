import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPremisesComponent } from './wedding-premises.component';

describe('WeddingPremisesComponent', () => {
  let component: WeddingPremisesComponent;
  let fixture: ComponentFixture<WeddingPremisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingPremisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingPremisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
