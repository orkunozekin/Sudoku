import React from 'react';
import Sudoku from './Sudoku';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import UserContext from '../ContextProvider';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  state = {
    difficulty: null
  }

  handleSubmitPlay = ev => {
    ev.preventDefault();
    const { selectDiff } = ev.target;
    this.setState({difficulty: selectDiff.value})
    console.log(selectDiff.value)
    this.props.history.push('/play')
}

  render() {
    return (
      <UserContext.Provider value={{
        handleSubmitPlay: this.handleSubmitPlay,
        difficulty: this.state.difficulty
      }}>
        <main className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/play" component={Sudoku} />
        </main>
      </UserContext.Provider>
    );
  }

}

export default withRouter(App);
