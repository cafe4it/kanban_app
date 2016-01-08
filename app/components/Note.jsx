import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.finishEdit = this.finishEdit.bind(this);
        this.checkEnter = this.checkEnter.bind(this);
        this.edit = this.edit.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderTask = this.renderTask.bind(this);

        this.state = {
            editing: false
        }
    }

    render() {
        const editing = this.state.editing;
        return (
            <div>
                {editing ? this.renderEdit() : this.renderTask()}
            </div>
        );
    }

    edit() {
        this.setState({
            editing: true
        });
    }

    checkEnter(e) {
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    }

    renderEdit() {
        return <input type="text"
                      autoFocus={true}
                      defaultValue={this.props.task}
                      onBlur={this.finishEdit}
                      onKeyPress={this.checkEnter}
            />
    }

    renderTask() {
        const onDelete = this.props.onDelete;
        return <div onClick={this.edit}>
            <span>{this.props.task}</span> &nbsp;
            {onDelete ? this.renderDelete() : null }
        </div>;
    }

    renderDelete(){
        return <button onClick={this.props.onDelete}>x</button>
    }

    finishEdit(e) {
        this.props.onEdit(e.target.value);
        this.setState({
            editing: false
        });
    }
}