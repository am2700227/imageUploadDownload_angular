import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadDownloadComponent } from './image-upload-download.component';

describe('ImageUploadDownloadComponent', () => {
  let component: ImageUploadDownloadComponent;
  let fixture: ComponentFixture<ImageUploadDownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploadDownloadComponent]
    });
    fixture = TestBed.createComponent(ImageUploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
