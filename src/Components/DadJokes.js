import React from 'react';
import UserContext from '../ContextProvider';

export default class DadJokes extends React.Component {

    static contextType = UserContext;

    render() {
        let handleFetchJokes = this.context.handleFetchJokes;
        return (
            <div className="dad-jokes-wrapper">
                <button onClick={handleFetchJokes}>Generate a random dad joke!</button>
            </div>
        )
    }
}