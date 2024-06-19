import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphStateComponent } from './graph-state.component';

describe('GraphStateComponent', () => {
  let component: GraphStateComponent;
  let fixture: ComponentFixture<GraphStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphStateComponent]
    });
    fixture = TestBed.createComponent(GraphStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
