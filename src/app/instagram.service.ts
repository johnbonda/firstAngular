import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
 public pics:string[]=['assets/r.jpg', 'assets/r1.jpg'] ;
 public AddPic(pPic:string) {
   this.pics.push(pPic);
 }
  constructor() { }
}
