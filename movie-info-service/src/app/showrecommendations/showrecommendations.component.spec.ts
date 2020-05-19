import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecommendationsComponent } from './showrecommendations.component';

describe('ShowrecommendationsComponent', () => {
  let component: ShowrecommendationsComponent;
  let fixture: ComponentFixture<ShowrecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
