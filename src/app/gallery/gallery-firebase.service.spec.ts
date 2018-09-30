import { TestBed, inject } from '@angular/core/testing';

import { GalleryFirebaseService } from './gallery-firebase.service';

describe('GalleryFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryFirebaseService]
    });
  });

  it('should be created', inject([GalleryFirebaseService], (service: GalleryFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
