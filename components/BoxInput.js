import React, { Component } from 'react';
import S from 'shorti'
import StoreModel from './models/StoreModel';
import { observable, action, decorate } from "mobx";
import { observer } from "mobx-react";

@observer
class BoxInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsVisible: false,
            value: '',
            generatedValue: '',
        };
    }

    @observable newItem = {};
    @observable data = '';

    showButtons() {
        this.setState({ buttonsVisible: true, });
    }
    hideButtons() {
        // this.setState({ buttonsVisible: false, });
    }

    @action handleBuildClicked() {
        this.props.store.updateStore(JSON.parse(this.state.value));
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleGenerateClicked() {
        this.setState({ generatedValue: JSON.stringify(this.props.store.store) });
    }

    render() {
        return (
            <div style={S('text-left font-30 mt-80 mb-80')}>
                <div>
                    <button onClick={this.handleBuildClicked.bind(this)}>BUILD JSON</button>
                    <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
                </div>
                <div>
                    <button onClick={this.handleGenerateClicked.bind(this)}>GENERATE</button>
                    <textarea value={this.state.generatedValue} />
                </div>
            </div>
        );
    }
}

export default observer(BoxInput);
