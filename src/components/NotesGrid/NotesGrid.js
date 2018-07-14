import React from 'react';
import Note from '../Note/Note';
import './NotesGrid.css'
var Masonry = require('masonry-layout');

class NotesGrid extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const grid = this.grid;

        this.msnry = new Masonry( grid, {
            // itemSelector: '.grid-item',
            columnWidth: 240,
            gutter: 10,
            // isFitWidth: true
          });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render(){
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div className="grid" ref={c => this.grid = c}>
            {
                notes.map(note =>
                <Note 
                    key={note.id}
                    id={note.id}
                    color={note.color}
                    text={note.text}
                    onNoteDelete={onNoteDelete} 
                />
                )
            }
            </div>
        );
    }
}

export default NotesGrid;