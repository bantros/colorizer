'use strict';

import { Storage } from './Storage';

export const Colorizer = {

  btnAction   : document.getElementsByClassName('btn--action'),
  btnSwatch   : document.getElementsByClassName('btn--swatch'),
  inputColor  : document.getElementsByClassName('input__color'),

  init() {
    this.render();
  },

  createSwatchList() {

    // if (Storage.paletteM) {

      // let paletteM = JSON.parse(localStorage.getItem('paletteM'));
      //
      // document.getElementById('js-swatch__multiply').innerHTML = '';
      //
      // for (let i = 0; i < paletteM.length; i++) {
      //   document.getElementById('js-swatch__multiply').insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+ paletteM[i] +'" data-blend="multiply" data-color="'+ paletteM[i] +'"></button></div>');
      // }

    let palette = Storage.palette;

    function shuffle(obj) {
    	for (var j, x, i = obj.length; i; j = parseInt(Math.random() * i), x = obj[--i], obj[i] = obj[j], obj[j] = x);
    	return obj;
    };

    shuffle(palette);

    for (let i = 0; i < 6; i++) {
      document.getElementById('js-swatch__panel').insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="color:#'+ palette[i].lighten +'; background-color:#'+ palette[i].multiply +'" data-multiply="'+ palette[i].multiply +'" data-lighten="'+ palette[i].lighten +'"></button></div>');
    }

  },

  updateBlendMode() {

    let multiply = this.dataset.multiply;
    let lighten = this.dataset.lighten;

    document.documentElement.style.setProperty('--blend-multiply', '#' + multiply);
    document.documentElement.style.setProperty('--blend-lighten', '#' + lighten);

    for (let i = 0; i < Colorizer.btnSwatch.length; i++) {
      Colorizer.btnSwatch[i].classList.remove('is-active');
    }

    this.classList.add('is-active');

    Storage.savePalette(multiply, lighten);

  },

  render() {

    // Create color swatches
    Colorizer.createSwatchList();

    // Click swatch to update blend modes
    for (let i = 0; i < Colorizer.btnSwatch.length; i++) {
      Colorizer.btnSwatch[i].addEventListener('click', Colorizer.updateBlendMode, false);
    }

  }

};
