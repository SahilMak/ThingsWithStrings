import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestralComponent } from './orchestral.component';

describe('OrchestralComponent', () => {
  let component: OrchestralComponent;
  let fixture: ComponentFixture<OrchestralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrchestralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
