import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  @Input() title: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(): void {
    this.clicked.emit();
  }

}
