import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Sub:any;
  RouteParam;
  AllRouteParams:Params;
  constructor(public pObjRoute:ActivatedRoute) {
    this.Sub = this.pObjRoute.params.subscribe(params => {
      this.RouteParam = params['id'];
      this.AllRouteParams = params;
    })
   }

  ngOnInit() {
  }

}
