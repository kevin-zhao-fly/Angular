import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title='这是一个angular组建';

  msg:any;

  public obj={
    name:'张三'
  }

  public id='123';

  public list=[];
  public list2=[];
  public list3=[];

  constructor() { 
    this.list=['111','222','333'];
    this.list2=[
      {title:1111111111},
      {title:2222222222},
      {title:3333333333}
    ];
    this.list3=[
      {
        'carname':'马自达',
        'list':[
          {'title':'马1'},
          {'title':'马2'},

          {'title':'马3'},

        ]
      },
      {
        'carname':'宝马',
        'list':[
          {'title':'BMW1'},
          {'title':'BMW2'},

          {'title':'BMW3'},

        ]
      }
    ]
  }

  ngOnInit() {
    this.msg='<h2>这是一个msg消息<h2>';
  }

}
