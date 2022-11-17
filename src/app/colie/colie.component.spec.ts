import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColieComponent } from './colie.component';

describe('ColieComponent', () => {
  let component: ColieComponent;
  let fixture: ComponentFixture<ColieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
