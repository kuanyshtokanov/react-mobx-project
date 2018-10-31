import { observable, computed, action } from "mobx";
import ContainerModel from './ContainerModel';

export default class StoreModel {
    @observable store = {};

    constructor() {
        this.store = new ContainerModel();
    }

    // @computed
    // get unfinishedTodoCount() {
    //     return this.todos.filter(todo => !todo.finished).length;
    // }

    @action
    updateStore(dat) {
        this.store = dat;
    }
    // decorate(ContainerModel, {
    //     container: observable,
    //     addItem: action
    // });
}