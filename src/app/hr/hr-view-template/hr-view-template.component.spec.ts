import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRViewTemplateComponent } from './hr-view-template.component';

describe('HRViewTemplateComponent', () => {
  let component: HRViewTemplateComponent;
  let fixture: ComponentFixture<HRViewTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRViewTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRViewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
