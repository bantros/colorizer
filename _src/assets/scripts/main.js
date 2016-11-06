'use strict';

import { Colorizer } from './module/Colorizer';
import { Reader } from './module/Reader';

(function() {

  document.documentElement.className = 'js';

  Colorizer.init();
  Reader.init();

})();

// webfontloader

var WebFont = require('webfontloader');

WebFont.load({
  custom: {
    families: ['Apercu']
  }
});

// google analytics

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
// ga('create', 'UA-######-##', 'auto');
// ga('send', 'pageview');
