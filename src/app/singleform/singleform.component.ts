import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleform',
  templateUrl: './singleform.component.html',
  styleUrls: ['./singleform.component.css']
})
export class SingleformComponent implements OnInit {
  username : string;
  isActive : boolean;
  names : Array<object>;

  constructor() { 
    this.isActive = false;
    this.username = '';
    this.names = [{name:'August',age: 32, type:'Worker',ship:'Razzor'},{name:'Karem',age: 44, type:'Tennient',ship:'Razzor'}]
  }

  ngOnInit() {
  }

  onKeyPressed(ev)
  {

    if(ev.target.value){

      this.isActive = true;
    }else{

      this.isActive = false;
    }

  }

  dafaultUser(){

    //{name:'August',age: 32, type:'Worker',ship:'Razzor'}
    

    this.username = '';
    this.isActive = false;

  }

}
