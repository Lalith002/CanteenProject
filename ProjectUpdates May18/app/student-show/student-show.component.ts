import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  students=[
    new Student(1,'Lalith','Charan','Chennai',86),
    new Student(2,'Bharath','Kumar','Bangalore',73),
    new Student(3,'Bhuvanesh','Kumar','Mysore',78),
    new Student(4,'Jerin','Joshna','Thiruvallur',88),
    new Student(5,'Gokul','Kumar','Delhi',79),
    new Student(6,'Vignesh','Kumar','Mumbai',76),
    new Student(7,'Shashi','Vardhan','Chennai',82),
    new Student(8,'Vishnu','Vardhan','Chennai',81),
    new Student(9,'Sudharshan','Bhaskar','Thiruvallur',87),
    new Student(10,'Vinson','Samuel','Chennai',80),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
