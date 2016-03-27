import React from 'react';
import TaskerBody from './TaskerBody';


var tasks = [
    {
        task: "clean the floor",
        key: 1,
        completed: false
    },
    {
        task: "buy some food",
        key: 2,
        completed: false
    },
    {
        task: "study for your exams",
        key: 3,
        completed: false
    }
];



export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks}
    }


// Functions
    addNewTask(task) {
        this.state.tasks.push({
            task,
            completed: false
        });
        // this will re-render the page 
        this.setState({ tasks: this.state.tasks });
    }



    render() {
        return (
            <div>
                <h1 id="title" className="animated wobble">Tasker</h1>
                <hr />
                <TaskerBody tasks={this.state.tasks} addNewTask={this.addNewTask.bind(this)}/>
            </div>
        )
    }
}




// jQuery Animation
$(function() {
    $('.fa-minus').on('click', function() {
        $('.task-item').removeClass('flipInY fadeInDown');
        $('.task-item').toggleClass('fadeOutUp');
    });
});