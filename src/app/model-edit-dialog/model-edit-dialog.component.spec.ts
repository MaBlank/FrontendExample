import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEditDialogComponent } from './model-edit-dialog.component';

describe('ModelEditDialogComponent', () => {
  let component: ModelEditDialogComponent;
  let fixture: ComponentFixture<ModelEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelEditDialogComponent]
    });
    fixture = TestBed.createComponent(ModelEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
