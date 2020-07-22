import React from 'react';
import UserContext from '../ContextProvider';
import { NavLink } from 'react-router-dom';

export default class DadJokes extends React.Component {
    static contextType = UserContext;


    componentDidMount() {
        let handleFetchJokes = this.context.handleFetchJokes;
        handleFetchJokes();
    }

    goBack = () => {
        this.props.history.push('/')
    }


    render() {
        let handleFetchJokes = this.context.handleFetchJokes;
        let dadJokes = this.context.dadJokes.joke
        return (
            <div className="dad-jokes-wrapper">
                <h3>These ain't that funny fr fr</h3>
                <div className="dad-joke">{dadJokes}</div>
                <i className="em em-stuck_out_tongue_closed_eyes"></i><br /><br />
                <div className="dad-jokes-buttons">
                    <button className="another-joke-btn" onClick={handleFetchJokes}>Another Joke</button>
                    <button className="enough-jokes-btn" onClick={this.goBack}>Enough of this bs</button>
                </div>
            </div>
        )
    }
}