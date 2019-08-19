import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-with-http',
  templateUrl: './work-with-http.component.html',
  styleUrls: ['./work-with-http.component.css']
})
export class WorkWithHttpComponent implements OnInit, OnDestroy{

  constructor(public http:HttpClient) { }

  obsObject:Subscription;

  ngOnInit() {
    this.obsObject = this.http.get("http://jsonplaceholder.typicode.com/posts")
      .subscribe(
        (data) => { console.log(data); }, 
        (error) => { console.log(error); }
      )
  }

  ngOnDestroy () {
    this.obsObject.unsubscribe();
  }
}
