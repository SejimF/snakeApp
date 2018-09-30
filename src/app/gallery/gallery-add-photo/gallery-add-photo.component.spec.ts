import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAddPhotoComponent } from './gallery-add-photo.component';

describe('GalleryAddPhotoComponent', () => {
  let component: GalleryAddPhotoComponent;
  let fixture: ComponentFixture<GalleryAddPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAddPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAddPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
