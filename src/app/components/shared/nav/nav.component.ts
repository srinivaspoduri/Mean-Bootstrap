import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductsService } from 'src/services/Product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  linkText="";
  path="";
  constructor(public router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    console.log(token);
    if(token){
      this.linkText="Logout";
     
    }else{
      this.linkText="Login";
     
    }
  }
  loginHandle(e:Event){
    console.log(e);
  }  
  }
