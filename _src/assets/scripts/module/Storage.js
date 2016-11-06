'use strict';

export const Storage = {

  blendMultiply   : localStorage.getItem('blendMultiply'),
  blendLighten    : localStorage.getItem('blendLighten'),
  userImage       : localStorage.getItem('userImage'),
  colorizerImage  : document.getElementById('js-colorizer__image'),

  init() {
    this.render();
  },

  savePalette(blend, color) {

    if (blend === 'multiply') {
      localStorage.setItem('blendMultiply', color);
    } else if (blend === 'lighten') {
      localStorage.setItem('blendLighten', color);
    }

  },

  handleImage(result) {

    localStorage.setItem('userImage', result);

  },

  render() {

    if (Storage.blendMultiply) {
      document.documentElement.style.setProperty('--blend-multiply', '#' + Storage.blendMultiply);
    }

    if (Storage.blendLighten) {
      document.documentElement.style.setProperty('--blend-lighten', '#' + Storage.blendLighten);
    }

    if (Storage.userImage) {
      Storage.colorizerImage.src = Storage.userImage;
    }

  }

};
