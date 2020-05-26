import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityContainerComponent } from './ability-container.component';

describe('AbilityContainerComponent', () => {
  let component: AbilityContainerComponent;
  let fixture: ComponentFixture<AbilityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
