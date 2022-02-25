import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  someDate =  of(new Date());
  searchControl = new FormControl('some value');
  get doc() {
    return document;
  }
  constructor() {
    this.searchControl.valueChanges.subscribe(x => console.log(x));
  }
}
