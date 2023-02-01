import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRCreateTemplateComponent } from './hr-create-template.component';

describe('HRCreateTemplateComponent', () => {
  let component: HRCreateTemplateComponent;
  let fixture: ComponentFixture<HRCreateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRCreateTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRCreateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
