import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
    render() {

        let taskNode = this.props.tasks.map((task) =>
            <TaskItem task={task} key={task.id} />
        )

        return (
            <div>
                <h3 className="labels">Task List:</h3>
                <ul className="taskList">
                  {taskNode}
                </ul>
              </div>
        )
    }
}