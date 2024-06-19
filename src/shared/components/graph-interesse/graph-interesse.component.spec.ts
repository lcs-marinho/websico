import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphInteresseComponent } from './graph-interesse.component';

describe('GraphInteresseComponent', () => {
  let component: GraphInteresseComponent;
  let fixture: ComponentFixture<GraphInteresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphInteresseComponent]
    });
    fixture = TestBed.createComponent(GraphInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
