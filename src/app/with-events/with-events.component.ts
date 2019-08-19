import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-with-events',
  templateUrl: './with-events.component.html',
  styleUrls: ['./with-events.component.css']
})
export class WithEventsComponent implements OnInit, OnChanges, OnDestroy {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("on changes is called");
  }

  constructor() { }

  Username:string;
  Password:string;
  LoginStatus:boolean;

  Login(pUsername:string, pPassword:string) {
    this.LoginStatus = pUsername == "admin" && pPassword == "nimda";
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
