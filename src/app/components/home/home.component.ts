import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public msg:any;
  public username:any;
  public flag:any;
  public search:any;

  constructor() {
    this.msg="这是一个首页组件";
    this.username='张三';
    this.flag=true;
    this.search='张三';
   }

  ngOnInit() {
  }

  getmsg(){
    alert(this.msg);
  }

  setName(){
    this.username='名字变成了李四';
  }

  keyupFn(e){
    console.log(e);
    if (e.keyCode==13) {
      alert('按回车了');
    }
  }

  getInput(){
    alert(this.search);
  }

}
