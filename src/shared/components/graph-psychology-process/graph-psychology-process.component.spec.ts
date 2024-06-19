import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPsychologyProcessComponent } from './graph-psychology-process.component';

describe('GraphPsychologyProcessComponent', () => {
  let component: GraphPsychologyProcessComponent;
  let fixture: ComponentFixture<GraphPsychologyProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphPsychologyProcessComponent]
    });
    fixture = TestBed.createComponent(GraphPsychologyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
