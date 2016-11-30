'use strict';

export const Storage = {

  userMultiply    : localStorage.getItem('userMultiply'),
  userLighten     : localStorage.getItem('userLighten'),
  userImage       : localStorage.getItem('userImage'),
  colorizerImage  : document.getElementById('js-colorizer__image'),

  palette : [
    {'multiply': '15a29c', 'lighten': '293571'}, {'multiply': 'e6625e', 'lighten': '15a29c'},
    {'multiply': '1fde91', 'lighten': '083ea7'}, {'multiply': '00ffcb', 'lighten': '864bff'},
    {'multiply': 'f4c7ee', 'lighten': '008fd3'}, {'multiply': 'fec8be', 'lighten': '20ad65'},
    {'multiply': 'f9f8e6', 'lighten': 'ff8b8b'}, {'multiply': 'eec0db', 'lighten': '162bf4'},
    {'multiply': 'b6cac0', 'lighten': 'c02a1b'}, {'multiply': 'e88565', 'lighten': '181a27'},
    {'multiply': 'fe667b', 'lighten': 'c0c2ce'},
    {'multiply': 'c5373c', 'lighten': '3700ee'}, {'multiply': 'bdece1', 'lighten': '49394e'},
    {'multiply': '7297f3', 'lighten': '273163'}
  ],

  // 7297f3
// 273163

  init() {
    this.render();
  },

  savePalette(multiply, lighten) {

    localStorage.setItem('userMultiply', multiply);

    localStorage.setItem('userLighten', lighten);

  },

  handleImage(result) {

    localStorage.setItem('userImage', result);

  },

  render() {

    if (Storage.userMultiply) {
      document.documentElement.style.setProperty('--blend-multiply', '#' + Storage.userMultiply);
    }

    if (Storage.userLighten) {
      document.documentElement.style.setProperty('--blend-lighten', '#' + Storage.userLighten);
    }

    if (Storage.userImage) {
      Storage.colorizerImage.src = Storage.userImage;
    } else {
      Storage.colorizerImage.src = '/assets/images/placeholder.jpg';
    }

  }

};
