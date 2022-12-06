import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArticleViewComponent } from './modal-article-view.component';

describe('ModalArticleViewComponent', () => {
  let component: ModalArticleViewComponent;
  let fixture: ComponentFixture<ModalArticleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalArticleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
