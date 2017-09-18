import {observable, action, computed} from 'mobx';

class BirdStore {
  @observable birds = [];  // data I want to keep track on

  @action addBird = (bird) => {
    this.birds.push(bird);
  }

  @computed get birdCount() => {
    return this.birds.size;
  }
}

const store = new BirdStore();
export default store;
