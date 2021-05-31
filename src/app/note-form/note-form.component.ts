import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/shared/note.model'

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {


  @Input() note: Note = new Note("", "");
  @Input() onEdit = false;

  @Output() CreateNote = new EventEmitter<Note>();
  @Output() UpdateNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateNote() {
    if (this.note.noteTitle != null && this.note.noteTitle != "") {
      let note = new Note(this.note.noteTitle, this.note.noteText);
      console.log(note);
      this.CreateNote.emit(note);
      this.clearData();
    }
    else alert("Название заметки обязательное поле");
  }
  clearData() {
    this.note.noteTitle = "";
    this.note.noteText = "";
  }
  onChangeNote() {
    console.log(this.note);
    if (this.note.noteTitle != null && this.note.noteTitle != "") {
      let note = new Note(this.note.noteTitle, this.note.noteText);
      note.noteId = this.note.noteId;
      note.noteCreateTime = this.note.noteCreateTime;
      note.noteCreateDate = this.note.noteCreateDate;
      this.UpdateNote.emit(note);
      this.clearData();
    }
    else alert("Название заметки обязательное поле");
  }
}
