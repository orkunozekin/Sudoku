import React from 'react';
import Sudoku from './Sudoku';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import UserContext from '../ContextProvider';
import { withRouter } from 'react-router-dom';
import DadJokes from './DadJokes';

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
  
  
  handleFetchJokes = () => {
    return fetch('https://icanhazdadjoke.com/slack', {
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json"
       }
    })
         .then(res => {
             if (res.ok) {
                 return res.json()
             }
             else {
                 throw new Error('Bad response')
             }
         })
         .then((data) => {
             console.log(data)
         })
 }

  render() {
    return (
      <UserContext.Provider value={{
        handleSubmitPlay: this.handleSubmitPlay,
        difficulty: this.state.difficulty,
        handleFetchJokes: this.handleFetchJokes
      }}>
        <main className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/play" component={Sudoku} />
          <Route exact path="/dadjokes" component={DadJokes} />
        </main>
      </UserContext.Provider>
    );
  }

}

export default withRouter(App);
