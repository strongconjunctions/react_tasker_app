import React from 'react';
import TaskerBody from './TaskerBody';


var tasks = [
    {
        task: "clean the floor",
        id: 1,
        completed: false
    },
    {
        task: "buy some food",
        id: 2,
        completed: false
    },
    {
        task: "study for your exams",
        id: 3,
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
        this.setState({ tasks: this.state.task });
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