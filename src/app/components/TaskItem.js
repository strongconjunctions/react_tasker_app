import React from 'react';

export default class TaskItem extends React.Component {
    render() {

        return (
            <li>
                {this.props.task.description}
            </li>
        )
    }
}