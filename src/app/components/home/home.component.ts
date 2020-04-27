import { Component, OnInit } from '@angular/core';
import { CONFIG } from '@env/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  addreesMap = CONFIG.urlGoogle;

  constructor() {}

  ngOnInit() {}
}
