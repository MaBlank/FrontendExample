import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacyComponent } from './spacy.component';

describe('SpacyComponent', () => {
  let component: SpacyComponent;
  let fixture: ComponentFixture<SpacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacyComponent]
    });
    fixture = TestBed.createComponent(SpacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
