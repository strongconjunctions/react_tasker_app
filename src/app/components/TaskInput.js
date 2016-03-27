import React from 'react';


// jQuery Animation
$(function() {
    $('.fa-plus').on('click', function() {
        $('.task-item').removeClass('flipInY fadeOutUp');
        $('.task-item').toggleClass('fadeInDown');
    });
    $('.fa-remove').on('click', function() {
        $('.task-item').removeClass('flipInY fadeInDown');
        $('.task-item').toggleClass('fadeOutUp');
    });
});


export default class TaskInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            defaultTask: "This is a default task"
        }
    }

/*    changeState(e) {
        this.setState({this.state.defaultTask = target.value});
    }*/

    addTask(event) {
        event.preventDefault();
        this.props.addNewTask(this.refs.createTask.value);

        this.refs.createTask.value = '';
    }

    render() {

        return (
            <div>
                <form onSubmit={this.addTask.bind(this)}>
                    <h3 className="labels">New Task: </h3>
                    <input type="text" placeholder="Let's add some tasks" id="task" ref="createTask" />

                    <button class="buttons"><span class="fa fa-plus"></span></button>
                </form>
            </div>
        )
    }
}