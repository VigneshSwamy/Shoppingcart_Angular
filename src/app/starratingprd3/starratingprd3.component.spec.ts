import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Starratingprd3Component } from './starratingprd3.component';

describe('Starratingprd3Component', () => {
  let component: Starratingprd3Component;
  let fixture: ComponentFixture<Starratingprd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Starratingprd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Starratingprd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
