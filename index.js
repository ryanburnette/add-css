(function() {
  'use strict';

  function addCSS(css) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = addCSS;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return addCSS;
      });
    } else {
      window.addCSS = addCSS;
    }
  }
})();
