import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowComponent } from './wow.component';

describe('WowComponent', () => {
  let component: WowComponent;
  let fixture: ComponentFixture<WowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
