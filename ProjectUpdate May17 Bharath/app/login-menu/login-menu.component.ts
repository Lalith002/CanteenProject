import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  userName : string;
  passWord : string;
  login() {
    if (this.userName=="Lalith" && this.passWord=="Lalith123") {
     this._router.navigate(['/menu']);
    } else {
      alert("Invalid Credentials...");
    }
  }
  constructor(private _router:Router) {
    this.userName="";
    this.passWord="";
   }

  ngOnInit(): void {
  }

}
