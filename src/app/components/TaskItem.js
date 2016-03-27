import React from 'react';

export default class TaskItem extends React.Component {
    render() {

        return (
            <li className="task-item animated flipInY">
                {this.props.task.task}

                <button className="buttons task-btns"><span class="fa fa-minus"></span></button>
            </li>
        )
    }
}