import React from 'react';

export default class TaskInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            defaultTask: "This is a default task"
        }
    }


    render() {

        return (
            <div>
                <h3 className="label">New Task: </h3><input type="text" id="task" value={this.state.defaultTask} />

                <input class="buttons" type="button" onclick="deleteAllTasks()" value="-" />
                <input class="buttons" type="submit" onclick="addTask()" value="+" />
            </div>
        )
    }
}