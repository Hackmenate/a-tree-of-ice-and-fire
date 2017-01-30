import React from 'react';
import classNames from 'classnames';

class FamilyTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggle() {
    this.setState({visible: !this.state.visible});
  };

  render() {
    let children;
    let classObj;

    if (this.props.node.children && this.props.node.children.length > 0) {
      //TODO: Create a new FamilyTree component for every child

      //If the node has children, give it extra css properties
      classObj = {
        togglable: true,
        "togglable-down": this.state.visible,
        "togglable-up": !this.state.visible
      };
    }

    let style;
    if (!this.state.visible) {
      style = {display: "none"};
    }

    return (
      <div>
        <h5 onClick={this.toggle.bind(this)} className={classNames(classObj)}>
          {this.props.node.name}
        </h5>
        <ul style={style}>
          {children}
        </ul>
      </div>
    );
  }
}

export default FamilyTree;
