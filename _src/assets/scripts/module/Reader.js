'use strict';

export const Reader = {

  input : document.getElementById('js-input__file'),
  image : document.getElementById('js-colorizer__image'),

  init() {
    this.render();
  },

  handleFileUpload() {

    let r, file;

    r = new FileReader();
    file = Reader.input.files[0];

    if (file) {
      r.readAsDataURL(file);
    }

    r.addEventListener('load', function () {
      Reader.image.src = r.result;
    }, false);

  },

  render() {

    Reader.input.addEventListener('change', Reader.handleFileUpload, false);

  }

};
