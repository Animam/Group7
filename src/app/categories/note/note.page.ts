import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  note: any;
  constructor() { }

  ngOnInit() {
    this.note= JSON.parse(localStorage.getItem('Note'));
    console.log(this.note)
  }

}
