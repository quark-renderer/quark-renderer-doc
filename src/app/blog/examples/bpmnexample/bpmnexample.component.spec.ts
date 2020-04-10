import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPMNExampleComponent } from './bpmnexample.component';

describe('BPMNExampleComponent', () => {
  let component: BPMNExampleComponent;
  let fixture: ComponentFixture<BPMNExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPMNExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPMNExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
