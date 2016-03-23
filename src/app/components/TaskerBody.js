import React from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';


export default class TaskerBody extends React.Component {
    render() {
        return (
            <div id="wrapper">
                
                <TaskInput />
                <TaskList />
            </div>
        )
    }
}