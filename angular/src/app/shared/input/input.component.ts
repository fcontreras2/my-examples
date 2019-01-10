import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label:string = null;
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value = null;

  @Output() change = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  changeInput() {
    this.change.emit(this.control);
    console.log(this.control)
  }

}
