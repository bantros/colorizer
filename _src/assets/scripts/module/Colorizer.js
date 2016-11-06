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

    // let hexLighten = Colorizer.hexLighten.sort();

    for (let i = 0; i < Colorizer.hexMultiply.length; i++) {
      document.getElementById('js-swatch__multiply').insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+ Colorizer.hexMultiply[i] +'" data-blend="multiply" data-color="'+ Colorizer.hexMultiply[i] +'"></button></div>');
    }

    for (let i = 0; i < Colorizer.hexLighten.length; i++) {
      document.getElementById('js-swatch__lighten').insertAdjacentHTML('beforeend', '<div class="swatch__item"><button class="btn  btn--swatch" style="background-color:#'+ Colorizer.hexLighten[i] +'" data-blend="lighten" data-color="'+ Colorizer.hexLighten[i] +'"></button></div>');
    }

  },

  previewFile() {

    let reader, image, preview;

    reader = new FileReader();
    image = document.getElementById('js-uploadFile').files[0];
    preview = document.getElementById('js-previewFile');

    if (image) {
      reader.readAsDataURL(image);
    }

    reader.addEventListener('load', function () {
      preview.src = reader.result;
    }, false);

  },

  toggleSwatchOverlay() {

    let target = this.dataset.target;

    document.getElementById('js-app').classList.add('has-swatch');

    for (var i = 0; i < Colorizer.btnAction.length; i++) {
      Colorizer.btnAction[i].classList.remove('is-active');
    }

    this.classList.add('is-active');

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

    // console.log(blend, color);

    if (blend === 'multiply') {
      document.documentElement.style.setProperty('--blend-multiply', '#' + color);
    } else if (blend === 'lighten') {
      document.documentElement.style.setProperty('--blend-lighten', '#' + color);
    }

  },

  // isHex(input) {
  //
  //   let parse = parseInt(input, 16);
  //
  //   return (parse.toString(16) === input.toLowerCase());
  //
  // },
  //
  // test() {
  //
  //   let input = this.value;
  //   let blend = this.dataset.blend;
  //   // let color = document.querySelectorAll('[data-type="'+ blend +'"]');
  //
  //   if (input.length === 6 & Colorizer.isHex(input)) {
  //
  //     if (blend === 'multiply') {
  //
  //       document.documentElement.style.setProperty('--blend-multiply', '#' + input);
  //
  //     } else if (blend === 'lighten') {
  //
  //       document.documentElement.style.setProperty('--blend-lighten', '#' + input);
  //
  //     }
  //
  //   }
  //
  // },

  render() {

    // Create color swatches
    Colorizer.createSwatchList();

    // Handle file upload preview
    document.getElementById('js-uploadFile').addEventListener('change', Colorizer.previewFile, false);

    // Open swatch list
    for (var i = 0; i < Colorizer.btnAction.length; i++) {
      Colorizer.btnAction[i].addEventListener('click', Colorizer.toggleSwatchOverlay, false);
    }

    // Click swatch to update blend modes
    for (var i = 0; i < Colorizer.btnSwatch.length; i++) {
      Colorizer.btnSwatch[i].addEventListener('click', Colorizer.updateBlendMode, false);
    }

    // Text input to update blend modes
    // for (let i = 0; i < Colorizer.hexInput.length; i++) {
    //   Colorizer.hexInput[i].addEventListener('keyup', Colorizer.test, false);
    // }

  }

};