import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  Name:string;
  Email:string;
  Password:string;
  Contact:number;
  Gender:string;

  constructor() { }

  ngOnInit() {
  }

}
