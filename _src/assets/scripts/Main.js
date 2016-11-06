'use strict';

import { Colorizer } from './module/Colorizer';
import { Reader } from './module/Reader';
import { Storage } from './module/Storage';

(function() {

  document.documentElement.className = 'js';

  Colorizer.init();
  Reader.init();
  Storage.init();

  let everythingLoaded = setInterval(function() {

    if (/loaded|complete/.test(document.readyState)) {
      clearInterval(everythingLoaded);
      document.getElementById('js-colorizer').classList.add('is-loaded');
    }

  }, 10);

})();

// webfontloader

var WebFont = require('webfontloader');

WebFont.load({
  custom: {
    families: ['Apercu']
  }
});

// google analytics

if (window.location.host === 'colorizer.bantros.net') {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-25002845-7', 'auto');
  ga('send', 'pageview');
}
