import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                  <TaskItem />
                  <TaskItem />
                </ul>
              </div>
        )
    }
}