import uuid from 'node-uuid';
import assign from 'object-assign';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
    constructor() {
        this.bindActions(NoteActions);
        this.notes = [];
    }

    create(note) {
        const notes = this.notes;
        note.id = uuid.v4();
        this.setState({
            notes: notes.concat(note)
        });
    }

    update(updatedNote) {
        const notes = this.state.notes.map((note)=> {
            if (note.id === updatedNote.id) {
                note = assign({}, note, updatedNote);
            }
        });
        this.setState({notes});
    }

    delete(id) {
        this.state.notes.filter((note)=> note.id !== id);
    }
}
export default alt.createStore(NoteStore, 'NoteStore');