import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphGenderComponent } from './graph-gender.component';

describe('GraphGenderComponent', () => {
  let component: GraphGenderComponent;
  let fixture: ComponentFixture<GraphGenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphGenderComponent]
    });
    fixture = TestBed.createComponent(GraphGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
