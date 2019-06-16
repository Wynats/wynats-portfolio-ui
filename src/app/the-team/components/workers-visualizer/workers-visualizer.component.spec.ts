import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersVisualizerComponent } from './workers-visualizer.component';

describe('WorkersVisualizerComponent', () => {
  let component: WorkersVisualizerComponent;
  let fixture: ComponentFixture<WorkersVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
