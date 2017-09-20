import {observable, action, computed} from 'mobx';

class BirdStore {
  @observable birds = [];  // data I want to keep track on

  @action addBird = (bird) => { //actions are for changing observables
    this.birds.push(bird);
  }

  @computed get birdCount(){ // perform calculations on observables
    return this.birds.length;
  }
}

const store = new BirdStore();
export default store;
