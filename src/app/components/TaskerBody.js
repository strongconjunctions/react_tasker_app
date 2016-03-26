import React from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';



export default class TaskerBody extends React.Component {
    render() {
        return (
            <div id="wrapper">
                
                <TaskInput addNewTask={this.props.addNewTask} />
                <TaskList tasks={this.props.tasks} />
            </div>
        )
    }
}