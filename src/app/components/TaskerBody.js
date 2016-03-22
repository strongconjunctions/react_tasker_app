import React from 'react';
import TaskList from './TaskList';


export default class TaskerBody extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <h3>New Task: </h3><input type="text" id="task" />

                <button onclick="addTask()">+</button>
                <button onclick="deleteAllTasks()">-</button>
                
                <h3>Task List:</h3>
                <ul className="taskList"></ul>
               <TaskList />
            </div>
        )
    }
}