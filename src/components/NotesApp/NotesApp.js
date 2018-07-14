import React, { Component } from 'react';
import NotesEditor from '../NoteEditor/NoteEditor';
import NotesGrid from '../NotesGrid/NotesGrid';

class NotesApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: []
    }

    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.handleNoteDelete= this.handleNoteDelete.bind(this);
  }
  
  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if (savedNotes) {
        this.setState({ notes: savedNotes });
    }
  }

  componentDidUpdate() {
    const notes = JSON.stringify(this.state.notes);

    localStorage.setItem('notes', notes);
  }

  handleNoteAdd(newNote){
    this.setState({
      notes: [newNote, ...this.state.notes]
    });
  }

  handleNoteDelete(noteId){
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  render() {
    return (
      <div>
          <h1 className="App-title">Note</h1>
          <NotesEditor onNoteAdd={this.handleNoteAdd}/>
          <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
      </div>
    );
  }
}

export default NotesApp;
