import {observable} from 'mobx';

class Globle {
  @observable fullScreen = false;

  updateFullScreen(status = !this.fullScreen) {
    this.fullScreen = status;
  }
}

export default new Globle();
