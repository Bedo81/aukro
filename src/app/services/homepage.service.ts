import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  configUrl = 'https://aukro.cz/backend/api/homepage';

  private _photos: BehaviorSubject<Photo[]> = new BehaviorSubject<Photo[]>([]);
  public readonly photos$: Observable<Photo[]> = this._photos.asObservable();

  constructor(private http: HttpClient) { }

  private getListItems(): Observable<any[]> {
    return this.http.get<any>(this.configUrl).pipe(
      map(response => response.introPart[1][1].content.items)
    );
  }

  private mapToPhotoList(listItems: any[]): Photo[] {
    return listItems.map(listItem => {
      return  {
        name: listItem.name,
        url: listItem.images.lists.large[0].url
      }
    })
  }

  private getRandomItems(items: any[], count = 4) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  fetchNewPhotos() {
    this.getListItems().pipe(
      map(listItems => this.mapToPhotoList(listItems)),
      map(photos => this.getRandomItems(photos))
    ).subscribe(photos => {
      this._photos.next(photos);
    })
  }

  // getImage(imageUrl: string) {
  //   // return this.http.get<any>(imageUrl);
  //   return this.http.get<any>(imageUrl.split('aukro.cz/')[1], { responseType: 'Blob' as 'json' });
  // }
}
