import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenitemComponent } from './seenitem.component';

describe('SeenitemComponent', () => {
  let component: SeenitemComponent;
  let fixture: ComponentFixture<SeenitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeenitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
