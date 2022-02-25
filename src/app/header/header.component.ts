import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  someDate =  of(new Date());
  searchControl = new FormControl('some value');
  get doc() {
    return document;
  }
  constructor() {
    this.searchControl.valueChanges.subscribe(x => console.log(x));
  }
}
