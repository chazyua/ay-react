import React from 'react';
import './App.css';
import Selection from './components/Selection';
import Recruiter from './components/Recruiter';
import Client from './components/Client';

class App extends React.Component {
  state = {
    visible: true,
    whichComponentToShow: "Selection"
  }
  render(){
    if (this.state.whichComponentToShow === "Selection") {
      return (
        <div className="App">
              <Selection />
              <div className="row home-content__main">
                <h3>Who are you ?</h3>
                <div class="home-content__buttons">
                  <button onClick={() => {this.setState({whichComponentToShow : "Recruiter"});}} className="btn btn--stroke">
                      Recruiter</button><br />
                  <button onClick={() => {this.setState({whichComponentToShow : "Client"});}}  className="btn btn--stroke">
                      Client</button>
                </div>
              </div>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Recruiter") {
      return(
        <div className='App'>
        <Recruiter />
        </div>
      )
    } else if (this.state.whichComponentToShow === "Client") {
      return(
        <div className='App'>
        <Client />
        </div>
      )
    } 

}
}

export default App;
