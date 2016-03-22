import React from 'react';
import ReactDOM from 'react-dom';
import TaskerBody from './TaskerBody';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">Tasker</h1>
                <TaskerBody />
            </div>
        )
    }
}