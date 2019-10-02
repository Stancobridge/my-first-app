import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-practice]',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  username: string = '';
  showParagraph: boolean = false;
  clickArray: number[] = [];
  atFifthItem = 'none';
  constructor() { }

  ngOnInit() {
  }

  resetUsername () :void {
    this.username = '';
  }

  toggleParagraph(event: Event){
    this.showParagraph = !this.showParagraph;
    this.clickArray.push(Date.now());
  }
  
}
