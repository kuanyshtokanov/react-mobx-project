import { observable, computed, action } from "mobx";
import BoxModel from './BoxModel';

export default class ContainerModel {
    @observable type = 'container';
    @observable items = [];
    // @observable id = 0;

    // constructor(id) {
    //     this.id = id ? id : 0;
    // }
    // @computed
    // get unfinishedTodoCount() {
    //     return this.todos.filter(todo => !todo.finished).length;
    // }

    @action
    addItem(type, obj) {
        if (type === 'container') {
            this.items.push(obj);
        } else {
            this.items.push(obj);
        }
    }

    @action
    setInitialData(dat) {

    }
    // decorate(ContainerModel, {
    //     container: observable,
    //     addItem: action
    // });
}