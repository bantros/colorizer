'use strict';

import { Storage } from './Storage';

export const Colorizer = {

  swatchPanel  : document.getElementById('js-swatch__panel'),
  btnSwatch    : document.getElementsByClassName('btn--swatch'),

  init() {
    this.render();
  },

  createSwatchList() {

    let palette = Storage.palette;

    function shuffle(obj) {
    	for (let j, x, i = obj.length; i; j = parseInt(Math.random() * i), x = obj[--i], obj[i] = obj[j], obj[j] = x);
    	return obj;
    }

    shuffle(palette);

    Colorizer.swatchPanel.innerHTML = '';

    for (let i = 0; i < 6; i++) {
      Colorizer.swatchPanel.insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="color:#'+ palette[i].lighten +'; background-color:#'+ palette[i].multiply +'" data-multiply="'+ palette[i].multiply +'" data-lighten="'+ palette[i].lighten +'"></button></div>');
    }

    Colorizer.swatchPanel.insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--random" id="js-btn--random"><span class="h-srt">Randomise palette</span></button></div>');

    Colorizer.attachEventListner();

  },

  attachEventListner() {

    document.getElementById('js-btn--random').addEventListener('click', Colorizer.createSwatchList, false);

    for (let i = 0; i < document.getElementsByClassName('btn--swatch').length; i++) {
      document.getElementsByClassName('btn--swatch')[i].addEventListener('click', Colorizer.updateBlendMode, false);
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

    Colorizer.createSwatchList();

  }

};
