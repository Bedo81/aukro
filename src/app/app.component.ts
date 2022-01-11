import { Photo } from './models/photo';
import { HomepageService } from './services/homepage.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  photos$: Observable<Photo[]>;

  showGrayscale = false;

  constructor(private homepageService: HomepageService) {
    this.photos$ = this.homepageService.photos$;
  }

  ngOnInit() {
    this.fetchNewPhotos();
  }

 fetchNewPhotos() {
   this.homepageService.fetchNewPhotos();
 }

//   createImageFromBlob(image: Blob) {
//     let reader = new FileReader();
//     reader.addEventListener("load", () => {
//       this.previewSignsrc = reader.result;
//     }, false);

//     if (image) {
//        reader.readAsDataURL(image);
//     }
//  }

//  getImage(link: any) {
//    return this.homepageService.getImage(link);
//  }

}
