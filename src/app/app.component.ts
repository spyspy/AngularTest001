import { Component } from '@angular/core';

@Component({
  selector: 'test-tag',
  templateUrl: './app.component.html',
  // template: `
  // <h1>{{title}}</h1>
  // <h2>My favorite hero is: {{myHero}}</h2>
  // <h3>Test:{{1+1}}</h3>
  // <h3>Test:{{newTest}}</h3>
  // <h3>Test:{{newTest2}}</h3>
  // <h3>Test:{{newBobo}}</h3>
  // <h3>Test:{{newBobo2}}</h3>

  // `,
  //styleUrls: ['./app.component.css']
  styles: ['h1 { color: red; }','h2 {color:blue}','h3{color:green}']
})
export class AppComponent {
  title = '狗狗狗';
  myHero = '超人';
  newTest = 100+200;
  newTest2 = ['gogo','kkoko','bobo'];
  newBobo:boolean = true;
  newBobo2:boolean = false;
}
