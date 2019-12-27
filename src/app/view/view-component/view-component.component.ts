import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private http:HttpClient) { }
  userName:string="";
  response:any;
  ngOnInit() {
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe(
      (response)=>{
        this.response=response;
        console.log(this.response);
    })
    
  }
}
