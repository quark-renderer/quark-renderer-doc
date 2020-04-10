import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowExampleComponent } from './flow-example.component';

describe('FlowExampleComponent', () => {
  let component: FlowExampleComponent;
  let fixture: ComponentFixture<FlowExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
