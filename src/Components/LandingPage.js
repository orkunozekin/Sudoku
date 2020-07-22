import React from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../ContextProvider';

export default class LandingPage extends React.Component {

    static contextType = UserContext;

    render() {
        let handleSubmitPlay = this.context.handleSubmitPlay;
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
                    {/* <NavLink to="/play"> */}
                        <button className="play-button" type="submit">Play</button>
                    {/* </NavLink> */}
                </form>
            </section>
        )
    }
}