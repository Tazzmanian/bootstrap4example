import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronCComponent } from './jumbotron-c.component';

describe('JumbotronCComponent', () => {
  let component: JumbotronCComponent;
  let fixture: ComponentFixture<JumbotronCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
