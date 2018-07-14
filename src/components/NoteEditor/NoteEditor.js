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
        this.handleColor = this.handleColor.bind(this);
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

    handleColor(e){
        this.setState({
            color: e.target.getAttribute('value')
        });
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
                <div className="editor__panel">
                    <ul className="color-list">
                        <li className="color-item" active={this.state.color==='red'?'true':'false'} value="red" onClick={this.handleColor}>red</li>
                        <li className="color-item" active={this.state.color==='yellow'?'true':'false'} value="yellow" onClick={this.handleColor}>yellow</li>
                        <li className="color-item" active={this.state.color==='seagreen'?'true':'false'} value="seagreen" onClick={this.handleColor}>seagreen</li>
                        <li className="color-item" active={this.state.color==='dodgerblue'?'true':'false'} value="dodgerblue" onClick={this.handleColor}>dodgerblue</li>
                        <li className="color-item" active={this.state.color==='white'?'true':'false'} value="white" onClick={this.handleColor}>white</li>
                    </ul>        
                <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default NoteEditor;