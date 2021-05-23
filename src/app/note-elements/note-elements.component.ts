import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-note-elements',
  templateUrl: './note-elements.component.html',
  styleUrls: ['./note-elements.component.css']
})
export class NoteElementsComponent implements OnInit {

  constructor() { }
  @Input() notes: Note[] = [];

  @Output() deleteNote = new EventEmitter<number>();

  ngOnInit(): void {
  }

  onDeleteNote(id: number) {
    this.deleteNote.emit(id);
  }
}
