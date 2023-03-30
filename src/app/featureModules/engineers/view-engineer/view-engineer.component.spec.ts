import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEngineerComponent } from './view-engineer.component';

describe('ViewEngineerComponent', () => {
  let component: ViewEngineerComponent;
  let fixture: ComponentFixture<ViewEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
