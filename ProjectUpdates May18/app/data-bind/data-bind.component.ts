import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {
name:String;
company:String;
  constructor() {
    this.name="Lalith Charan";
    this.company="Mphasis";
   }

  ngOnInit(): void {
  }

}
