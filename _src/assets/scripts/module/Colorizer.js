'use strict';

export const Colorizer = {

  swatchPanel  : document.getElementsByClassName('swatch__panel'),
  btnAction    : document.getElementsByClassName('btn--action'),
  btnSwatch    : document.getElementsByClassName('btn--swatch'),

  hexMultiply  : ['15a29c', 'e6625e', '1fde91', '00ffcb', 'f4c7ee', 'fec8be'],
  hexLighten   : ['293571', '15a29c', '083ea7', '864bff', '008fd3', '20ad65'],

  init() {
    this.render();
  },

  createSwatchList() {

    for (let i = 0; i < Colorizer.hexMultiply.length; i++) {
      document.getElementById('js-swatch__multiply').insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+ Colorizer.hexMultiply[i] +'" data-blend="multiply" data-color="'+ Colorizer.hexMultiply[i] +'"></button></div>');
    }

    for (let i = 0; i < Colorizer.hexLighten.length; i++) {
      document.getElementById('js-swatch__lighten').insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+ Colorizer.hexLighten[i] +'" data-blend="lighten" data-color="'+ Colorizer.hexLighten[i] +'"></button></div>');
    }

  },

  toggleSwatchOverlay() {

    let target = this.dataset.target;

    // Toggle active class on action btn
    for (var i = 0; i < Colorizer.btnAction.length; i++) {
      Colorizer.btnAction[i].classList.remove('is-active');
    }

    this.classList.add('is-active');

    // Open swatch overlay and show selected panel
    document.getElementById('js-swatch').classList.add('is-active');

    for (var i = 0; i < Colorizer.swatchPanel.length; i++) {
      Colorizer.swatchPanel[i].style.setProperty('display', 'none');
    }

    if (target === 'multiply') {
      document.getElementById('js-swatch__multiply').style.setProperty('display', 'flex');
    } else if (target === 'lighten') {
      document.getElementById('js-swatch__lighten').style.setProperty('display', 'flex');
    }

  },

  updateBlendMode() {

    let blend = this.dataset.blend;
    let color = this.dataset.color;

    if (blend === 'multiply') {
      document.documentElement.style.setProperty('--blend-multiply', '#' + color);
      // document.getElementById('js-code__multiply').innerHTML = '.colorizer::before {\n\xa0 z-index: 2250;\n\xa0 background-color: #'+ color +';\n\xa0 mix-blend-mode: multiply;\n\}';
    } else if (blend === 'lighten') {
      document.documentElement.style.setProperty('--blend-lighten', '#' + color);
      // document.getElementById('js-code__lighten').innerHTML = '.colorizer::before {\n\xa0 z-index: 2500;\n\xa0 background-color: #'+ color +';\n\xa0 mix-blend-mode: lighten;\n\}';
    }

  },

  render() {

    // Create color swatches
    Colorizer.createSwatchList();

    // Open swatch list
    for (var i = 0; i < Colorizer.btnAction.length; i++) {
      Colorizer.btnAction[i].addEventListener('click', Colorizer.toggleSwatchOverlay, false);
    }

    // Click swatch to update blend modes
    for (var i = 0; i < Colorizer.btnSwatch.length; i++) {
      Colorizer.btnSwatch[i].addEventListener('click', Colorizer.updateBlendMode, false);
    }

  }

};
