import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearfixComponent } from './clearfix.component';

describe('ClearfixComponent', () => {
  let component: ClearfixComponent;
  let fixture: ComponentFixture<ClearfixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearfixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
