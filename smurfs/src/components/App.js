import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  renderSmurfs = () => {
    const formattedSmurfs = []
    if (this.props.smurfs) {
        this.props.smurfs.forEach((smurf) => {
            formattedSmurfs.push({name: smurf.name})
        })
    }
    return formattedSmurfs
}


  render() {
    const newSmurfs = this.renderSmurfs()
    console.log('inside App.js', this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          {this.props.fetchingSmurfs && 'Fetching...'}
          {!this.props.fetchingSmurfs && newSmurfs.length > 0 && (
            <div>
              {newSmurfs.map(smurf => (
                <p>{smurf.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs }) => ({
  smurfs,
  fetchingSmurfs
});

export default
  connect(
    mapStateToProps,
    { getSmurfs }
  )(App);