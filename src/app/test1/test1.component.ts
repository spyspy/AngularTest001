import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  test:String;
  test2:string;

  constructor() { 
    this.test='test1111';
    this.test2='test2222'
  }

  ngOnInit() {
  }

}
