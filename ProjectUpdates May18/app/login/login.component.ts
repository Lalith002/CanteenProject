import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
