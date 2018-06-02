import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.css']
})
export class DispComponent implements OnInit {
  displayText = false;
  clickLog = [];
  num = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.num++;
    this.displayText = !this.displayText;
    this.clickLog.push(new Date());
  }

}
