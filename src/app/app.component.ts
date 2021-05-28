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
  onEdit=false;

  onCreateNote(note: Note) {
    this.notes.push(note);
    // console.log(this.notes);
  }
  getNotes() {
    return this.notes;
  }
  onDeleteNote(id: number) {
    for (let i in this.notes) {
      if (id == this.notes[i].noteId)
        this.notes.splice(parseInt(i), 1);
    }
  }
  changeNote(id: number) {

    for (let i in this.notes) {
      if (id == this.notes[i].noteId) {
        this.noteToChange = this.notes[i];
        this.onEdit=true;
      }
    }
     console.log(this.noteToChange);
  }

  onUpdateNote(note: Note) {
    console.log(note);
    for (let i in this.notes) {
      if (note.noteId == this.notes[i].noteId) {
        this.notes.splice(parseInt(i), 1);
        this.onCreateNote(note);
        this.onEdit=false;
      }
    }
    console.log(this.notes);
  }
}
