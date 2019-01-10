import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from "@angular/animations";

@Component({
  selector: 'app-line-loader',
  templateUrl: './line-loader.component.html',
  styleUrls: ['./line-loader.component.scss'],
  animations: [
    trigger('loading', [
      transition('* => *', [
        animate('2s',
          keyframes([
            style({ borderTopColor: "green" }), // offset = 0
            style({ borderTopColor: "blue" }), // offset = 0.33
            style({ borderTopColor: "orange" }), // offset = 0.66
            style({ borderTopColor: "yellow" }), // offset = 1
            style({ borderTopColor: "red" }) // offset = 1
          ])
        )
      ])
    ])
  ]
})

export class LineLoaderComponent implements OnInit {

  @Input() isLoading:boolean = false;
  event:boolean = true;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.event = !this.event;
    },1000)
  }

}
