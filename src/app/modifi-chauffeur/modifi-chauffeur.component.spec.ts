import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiChauffeurComponent } from './modifi-chauffeur.component';

describe('ModifiChauffeurComponent', () => {
  let component: ModifiChauffeurComponent;
  let fixture: ComponentFixture<ModifiChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
