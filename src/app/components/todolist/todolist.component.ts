import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public username:any;

  public list;
  public list1;

  constructor() { 
    this.username='test';
    this.list=[];
    this.list1=[];
  }

  ngOnInit() {
  }

  getData(){
   // alert(this.username);
   this.list.push(this.username);
  }

  deleteData(key){
    //alert(key);
    this.list.splice(key,1);
  }

  addData(key){
    // console.log(key);
    if (key.keyCode==13) {
      this.list.push(this.username);
    }
  }

  moveData(i,key){
    this.list1.push(key);
    this.list.splice(i,1);
  }

}
