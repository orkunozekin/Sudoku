import React from 'react';
import Cell from './Cell';

export default class Block extends React.Component {
    render() {
        return (
            <div className="block">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        )
    }
}