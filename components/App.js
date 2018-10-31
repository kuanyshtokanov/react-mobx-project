import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action, decorate } from "mobx"
import { FormGroup, FormControl, Label, Button } from 'react-bootstrap'
import config from '../config'
import BoxModel from './models/BoxModel';
import ContainerModel from './models/ContainerModel';
import slug from 'slug'
import S from 'shorti'
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
      level: props.level
    };
  }
  handleInputChange(type, e) {
    this.props.data.form_data[type] = e.target.value
  }
  handleSubmit(e) {
    e.preventDefault()
    const title = this.props.data.form_data.title
    const content = this.props.data.form_data.content
    if (!title)
      return
    const post = {
      slug: slug(title),
      type_slug: 'posts',
      title,
      content
    }
    this.props.data.addPost(post);
  }
  handleRemoveClick(post) {
    this.props.data.removePost(post)
  }

  toggleButtons = () => {
    alert(1);
    this.setState(prevState => ({
      showButtons: !prevState.showButtons
    }))
  }

  @action
  handleBoxClicked() {
    let newBox = new BoxModel();
    console.info('newBox', newBox);
    this.props.store.addItem('box', newBox);
  }

  @action
  handleContainerClicked() {
    // let newContainer = new ContainerModel(this.state.level + 1);
    let newContainer = new ContainerModel();
    console.info('newContainer', newContainer);
    this.props.store.addItem('container', newContainer);
    // this.props.changeLevel();
  }


  render() {
    const data = this.props.store
    console.info('render', data);
    console.info('level', this.props.level);
    let posts_area
    if (this.is_loading) {
      posts_area = (
        <div style={S('text-center font-30 mt-80 mb-80')}>Loading...</div>
      )
    }

    if (data.items && data.items.length) {
      posts_area = data.items.map((curItem, index) => {
        if (curItem.type === 'box') {
          return (
            <div style={{ textAlign: "center" }} key={curItem.color}>
              <button style={{ backgroundColor: curItem.color, height: "100px", width: "100px" }} />
            </div>
          )
        } else {
          return (
            <App store={curItem} level={this.props.level + 1} changeLevel={this.props.changeLevel} />
          )
        }

      })
    }

    let cont_area
    if (data.items) {
      cont_area =
        <div key={data.items.length} style={{ "border": "2px solid", "position": "relative", "display": "inline-block" }}>
          {posts_area}
          <div style={{ "position": "relative", "textAlign": "center" }}>
            <Button onClick={() => { this.handleBoxClicked() }}>
              Box
            </Button>
            <Button onClick={() => { this.handleContainerClicked() }}>
              Container
            </Button>
          </div>
          <div style={{ "position": "relative", "textAlign": "center" }}>
            <button style={{
              "padding": "10px",
              "margin": "15px",
              "fontSize": "20px",
              "position": "relative"
            }} >
              ADD
            </button>
          </div>

        </div>
    }

    return (
      <div style={S('p-20')}>
        {cont_area}
      </div >
    )
  }
}
