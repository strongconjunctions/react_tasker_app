import React from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';


var tasks = [
    {
        description: "clean the floor",
        id: 1
    },
    {
        description: "buy some food",
        id: 2
    },
    {
        description: "study for your exams",
        id: 3
    }
];

export default class TaskerBody extends React.Component {
    render() {
        return (
            <div id="wrapper">
                
                <TaskInput />
                <TaskList tasks={tasks} />
            </div>
        )
    }
}