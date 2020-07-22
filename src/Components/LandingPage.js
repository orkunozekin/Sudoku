import React from 'react';
import UserContext from '../ContextProvider';
import { NavLink } from 'react-router-dom';
import DadJokes from './DadJokes';


export default class LandingPage extends React.Component {

    static contextType = UserContext;

    render() {
        let { handleSubmitPlay, handleFetchJokes }  = this.context;
        return (
            <section className="landing-page-wrapper">
                <h1>Welcome to Sudoku!</h1>
                <h3>Choose a difficulty to start playing!</h3>
                <form onSubmit={handleSubmitPlay} className="landing-page-form">
                    <select name="selectDiff" className="select-difficulty">
                        <option>Select Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <button className="play-button" type="submit">Play</button>
                </form>
                <NavLink className="dad-jokes-navlink" to="/dadjokes">
                    <div className="read-dad-jokes">Or Read Some Dad Jokes!</div>
                    <i className="em em-laughing"/>
                </NavLink>
            </section>
        )
    }
}