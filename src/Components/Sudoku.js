import React from 'react';
import './sudoku.css';
import Block from './Block';

export default class Sudoku extends React.Component {
    
    render() {
        return (
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
        )
    }
}
