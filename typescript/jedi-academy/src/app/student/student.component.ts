import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  inputs: ['isJedi']
})
export class StudentComponent implements OnInit {

  @Input() name: string
  isJedi: boolean

  constructor() { }

  ngOnInit() {
  }

}
