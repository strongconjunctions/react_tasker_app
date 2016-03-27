import React from 'react';


// add this to the delete button: onClick={this.deleteTask.bind(this)}

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