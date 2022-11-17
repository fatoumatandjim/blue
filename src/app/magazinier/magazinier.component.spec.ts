import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinierComponent } from './magazinier.component';

describe('MagazinierComponent', () => {
  let component: MagazinierComponent;
  let fixture: ComponentFixture<MagazinierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
