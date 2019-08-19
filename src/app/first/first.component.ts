import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy, DoCheck, OnChanges {

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("On changes is called.");
  }

  Name:string;
  State:string;
  Country:string;
  PlacesToVisit:string;

  constructor() {
    this.Name = "Hyderabad";
    this.State = "Telangana";
    this.Country = "India";
    this.PlacesToVisit = "Charminar, Wonderla";
  }

  getLocationDetails():any {
    return this;
  }

  ngOnInit() {
    console.log("On Init is called.");
  }

  ngOnDestroy() {
    console.log("On Destroy is called.");
  }

  ngDoCheck() {
    console.log("Do check is called.");
  }

}
