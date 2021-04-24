import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  saveNoteForm: FormGroup = this.fb.group({
    titleInput: [[], Validators.required],
    contentInput: [[], Validators.required]
  })
note: any={} ;
  constructor(private  fb: FormBuilder, private route:Router) { }

  ngOnInit() {
    }

  onSubmit(){
    console.log(this.saveNoteForm.value);
    this.note= Object.assign(this.note, this.saveNoteForm.value);
    this.addNote(this.note);
    this.saveNoteForm.reset();
    // this.route.navigate(['/new-note']);
  }
  addNote(note){
    let notes = [];
    if(localStorage.getItem('Note')){
      notes = JSON.parse(localStorage.getItem('Note'));
      notes = [note, ...notes];
    }
    else {
      notes= [note]
    }
    localStorage.setItem('Note',JSON.stringify(notes));
  }

}
