import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  @Input() propA:string;
  @Output() CustomEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
