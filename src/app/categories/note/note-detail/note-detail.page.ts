import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {
mark: any;
  constructor() { }

  ngOnInit() {
    this.mark= JSON.parse(localStorage.getItem('Note'));
    console.log(this.mark);
  }

}
