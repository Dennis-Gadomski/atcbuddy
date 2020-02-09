import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttosayComponent } from './texttosay.component';

describe('TexttosayComponent', () => {
  let component: TexttosayComponent;
  let fixture: ComponentFixture<TexttosayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexttosayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexttosayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
