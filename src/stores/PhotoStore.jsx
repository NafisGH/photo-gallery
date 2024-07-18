import { makeAutoObservable } from 'mobx';

class PhotoStore {
  photos = [];
  

  constructor() {
    makeAutoObservable(this);
  }

  setPhotos(photos) {
    this.photos = photos;
  }
}
const photoStore = new PhotoStore();
export default photoStore;