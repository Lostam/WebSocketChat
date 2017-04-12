import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFrameWorkComponent } from './chat-frame-work.component';

describe('ChatFrameWorkComponent', () => {
  let component: ChatFrameWorkComponent;
  let fixture: ComponentFixture<ChatFrameWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFrameWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFrameWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
