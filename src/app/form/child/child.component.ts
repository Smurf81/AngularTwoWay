import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() in;
  @Output() inChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update(text: string) {
    this.in = text;
    this.inChange.emit(text);
  }

}
