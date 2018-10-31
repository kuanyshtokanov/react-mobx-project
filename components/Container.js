import React, { Component } from 'react';
import BoxModel from './models/BoxModel';
import App from './App'
import BoxInput from './BoxInput'
import config from '../config'
import DevTools from 'mobx-react-devtools';
import { observable, action, decorate } from "mobx";
import { observer } from "mobx-react";

@observer
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsVisible: false,
    };
  }

  @observable newItem = {};
  @observable level = 0;

  showButtons() {
    this.setState({ buttonsVisible: true, });
  }
  hideButtons() {
    // this.setState({ buttonsVisible: false, });
  }

  @action handleBoxClicked() {
    let newBox = new BoxModel();
    this.props.store.addItem('box');
  }

  changeLevel() {
    this.level += 1;
    console.info('level = ', this.level);
  }

  render() {
    console.info('global store', this.props.store);
    let dev_tools
    if (config.env !== 'production')
      dev_tools = <DevTools />

    return (
      <div>
        {dev_tools}
        <App store={this.props.store.store} changeLevel={() => this.changeLevel()} level={this.level} />
        <BoxInput store={this.props.store} />
      </div>
    )
  }
}
// decorate(Container, {
//   newItem: observable,
//   handleBoxClicked: action
// });
export default observer(Container);
