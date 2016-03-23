import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
    render() {
        return (
            <div>
                <h3 className="label">Task List:</h3>
                <ul className="taskList">
                  <TaskItem />
                  <TaskItem />
                </ul>
              </div>
        )
    }
}