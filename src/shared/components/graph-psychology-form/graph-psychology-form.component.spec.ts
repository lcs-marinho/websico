import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPsychologyFormComponent } from './graph-psychology-form.component';

describe('GraphPsychologyFormComponent', () => {
  let component: GraphPsychologyFormComponent;
  let fixture: ComponentFixture<GraphPsychologyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphPsychologyFormComponent]
    });
    fixture = TestBed.createComponent(GraphPsychologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
