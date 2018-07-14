import React from 'react';
import './Note.css';

const DEFAULT_COLOR = 'yellow';

class Note extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            text: this.props.text,
            color: this.props.color || DEFAULT_COLOR

        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onNoteDelete(this.props.id);
    }

    render(){

        return (
            <div className="note" style={{ backgroundColor: this.state.color }}>
                <p className="note__text">{this.state.text}</p>
                <span className="note__close" onClick={this.handleDelete}>x</span>
            </div>
        );
    }
}

export default Note;