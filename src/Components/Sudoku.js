import React from 'react';
import './sudoku.css';
import Block from './Block';
import UserContext from '../ContextProvider';


export default class Sudoku extends React.Component {

    static contextType = UserContext;

    render() {
        let difficulty = this.context.difficulty
        return (
            <div className="board-wrapper">
                <h3>Difficulty: {difficulty}</h3>
                <div className="board">
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                </div>
                <button className="go-back-button" onClick={e => this.props.history.push('/')}>Go Back</button>
            </div>
        )
    }
}
