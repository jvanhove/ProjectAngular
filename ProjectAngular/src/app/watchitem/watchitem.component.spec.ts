import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchitemComponent } from './watchitem.component';

describe('WatchitemComponent', () => {
  let component: WatchitemComponent;
  let fixture: ComponentFixture<WatchitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
