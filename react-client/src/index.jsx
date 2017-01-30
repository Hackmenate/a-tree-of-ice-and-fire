import React from 'react';
import ReactDOM from 'react-dom';
import FamilyTree from './components/FamilyTree.jsx';
import axios from 'axios';

import { buildTree } from './helpers/tree-builder.js';

// This is dummy data to get you started on building the family tree.
// Delete this after you're able to serve actual data from your server.
const exampleTree = {
  name: 'Bob',
  parent: '',
  children: [
    {
      name: 'Fred',
      parent: 'Bob',
      children:[
        {
          name: 'Alice',
          parent: 'Tom',
          children: [
            {
              name: 'Ted',
              parent: 'Alice',
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'Tom',
      parent: 'Bob',
      children: []
    }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characterName: '',
      tree: this.props.node
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({characterName: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault()
    buildTree(this.state.characterName)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Character name:
            <input type="text"
                   value={this.state.characterName}
                   onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.tree ?
          <FamilyTree node={ this.state.tree } />
          : null}
      </div>
    )
  }
}

ReactDOM.render(<App node={ exampleTree }/>, document.getElementById('app'));


