import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  renderSmurfs = () => {
    const formattedSmurfs = []
    if (this.props.smurfs) {
        this.props.smurfs.forEach((smurf) => {
            formattedSmurfs.push({name: smurf.name, age: smurf.age, height: smurf.height })
        })
    }
    return formattedSmurfs
  }

  addNewSmurf = (e) => {
    e.preventDefault()
    this.props.addSmurf(this.state.newSmurf).then(() => {
      this.props.getSmurfs();
    });
    this.setState({ newSmurf: {
      ...this.state.newSmurf,
      name: '', age: '', height: '', id: ''}
    })
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
                <p key={smurf.name}><strong>Name:</strong> {smurf.name} <strong>Age:</strong> {smurf.age} <strong>Height:</strong> {smurf.height}</p>
              ))}
            </div>
          )}
        </div>
        <form onSubmit={this.addNewSmurf}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            autoComplete='off'
            onChange={this.handleChanges}
            value={this.state.newSmurf.name}
            required>
          </input>
          <input
            type='text'
            name='age'
            placeholder='Age'
            autoComplete='off'
            onChange={this.handleChanges}
            value={this.state.newSmurf.age}
            required>
          </input>
          <input
            type='text'
            name='height'
            placeholder='Height'
            autoComplete='off'
            onChange={this.handleChanges}
            value={this.state.newSmurf.height}
            required>
          </input>
          <button>
          {this.props.addingSmurf ? (
              '.......'
          ) : (
              'Add Smurf'
          )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs, addingSmurf }) => ({
  smurfs,
  fetchingSmurfs,
  addingSmurf
});

export default
  connect(
    mapStateToProps,
    { getSmurfs, addSmurf }
  )(App);