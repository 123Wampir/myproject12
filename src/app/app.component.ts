import { Component } from '@angular/core';
import { Note } from './shared/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project12';
  notes: Note[] = [];
  noteToChange: Note = new Note("", "");
  onEdit = false;

  onCreateNote(note: Note) {
    this.notes.push(note);
  }

  onDeleteNote(id: number) {
    let i = this.notes.findIndex(item => id === item.noteId);
    this.notes.splice(i, 1);
  }
  changeNote(id: number) {
    let i = this.notes.findIndex(item => id === item.noteId);
    this.noteToChange = this.notes[i];
    this.onEdit = true;
    console.log(this.noteToChange);
  }

  onUpdateNote(note: Note) {
    console.log(note);
    let i = this.notes.findIndex(item => note.noteId === item.noteId);
    this.notes.splice(i, 1);
    this.onCreateNote(note);
    this.onEdit = false;
    console.log(this.notes);
  }
}
