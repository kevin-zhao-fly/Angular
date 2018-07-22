import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title='这是一个angular组建';

  msg:any;

  public id='123';

  constructor() { }

  ngOnInit() {
    this.msg='<h2>这是一个msg消息<h2>';
  }

}
