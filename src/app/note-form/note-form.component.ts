import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/shared/note.model'

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Output() CreateNote = new EventEmitter<Note>();
  constructor() { }

  ngOnInit(): void {
  }

  onCreateNote(elm1: HTMLInputElement, elm2: HTMLTextAreaElement) {
    if (elm1 != null && elm1.value != "") {
      let note = new Note(elm1.value, elm2.value);
      console.log(note);
      this.CreateNote.emit(note);
      this.clearData(elm1, elm2);
    }
    else alert("Название заметки обязательное поле");

  }
  clearData(elm1: HTMLInputElement, elm2: HTMLTextAreaElement) {
    elm1.value = "";
    elm2.value = "";
  }
}
