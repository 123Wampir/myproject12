export class Note {
    noteTitle:string;
    noteText:string;
    noteCreateTime:string;
    noteCreateDate:string;
    noteId:number;
    static id=0;
    constructor(title:string,text:string) {
      this.noteTitle=title;
      this.noteText=text;
      let now=new Date();
      this.noteCreateTime=now.toLocaleTimeString();
      this.noteCreateDate=now.toLocaleDateString();
      Note.id++;
      this.noteId=Note.id;
    }
    deleteNote(){
      document.getElementById(this.noteId.toString())?.remove();
    }
  }