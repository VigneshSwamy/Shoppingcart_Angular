import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Starratingprd2Component } from './starratingprd2.component';

describe('Starratingprd2Component', () => {
  let component: Starratingprd2Component;
  let fixture: ComponentFixture<Starratingprd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Starratingprd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Starratingprd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
