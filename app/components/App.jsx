import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes : [
                {
                    id : uuid.v4(),
                    task : 'Learn Webpack'
                },
                {
                    id : uuid.v4(),
                    task : 'Learn React'
                },
                {
                    id : uuid.v4(),
                    task : 'Do laundry'
                },
                {
                    id : uuid.v4(),
                    task : 'Chrome extension'
                }
            ]
        }

        this.addNote = this.addNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    render(){
        const notes = this.state.notes;
        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
            </div>
        )
    }
    addNote() {
        this.setState({
            notes : this.state.notes.concat([{
                id : uuid.v4(),
                task : 'New task'
            }])
        })
    }

    editNote(noteId, task) {
        const notes = this.state.notes.map((note)=>{
            if(note.id === noteId && task){
                note.task = task
            }

            return note;
        })
        this.setState({notes});
    }
    deleteNote(id){
        this.setState({
            notes : this.state.notes.filter((note)=> note.id !== id)
        });
    }
}

module.exports = App;