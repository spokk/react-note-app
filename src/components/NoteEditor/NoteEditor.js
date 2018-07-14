import React from 'react';
import './NoteEditor.css'

const DEFAULT_COLOR = 'yellow';

class NoteEditor extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            text: '',
            color: this.props.color || DEFAULT_COLOR

        }
        
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleTextChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleNoteAdd(){
        const newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    }

    resetState() {
        this.setState({
            text: ''
        });
    }

    render(){

        return (
            <div className="editor">
                <textarea rows={5} placeholder="Enter the note here..." value={this.state.text} onChange={this.handleTextChange} />
                <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}

export default NoteEditor;