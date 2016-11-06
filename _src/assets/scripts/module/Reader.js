'use strict';

import { Storage } from './Storage';

export const Reader = {

  input : document.getElementById('js-input__file'),
  image : document.getElementById('js-colorizer__image'),

  init() {
    this.render();
  },

  handleFileUpload() {

    let fileReader, file, result;

    fileReader = new FileReader();
    file = Reader.input.files[0];

    if (file) {
      fileReader.readAsDataURL(file);
    }

    fileReader.addEventListener('load', function () {

      result = fileReader.result;
      Reader.image.src = result;

      Storage.handleImage(result);

    }, false);

  },

  render() {

    Reader.input.addEventListener('change', Reader.handleFileUpload, false);

  }

};
