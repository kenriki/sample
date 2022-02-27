/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/


var mainApp = mainApp || {
  init: function init() {
    document.addEventListener("DOMContentLoaded", function (event) {
      "use strict";

      document.getElementById("ID_BTN_JSON").addEventListener("click", app.getJSON, false);
      document.getElementById("id_convert_btob_ja").addEventListener("click", convert_btob_ja, false);
      document.getElementById("id_convert_atob_ja").addEventListener("click", convert_atob_ja, false);
    });
    var app = {};

    app.getJSON = function () {
      "use strict;";

      var json = JSON.parse($('.json').val());
      var result = JSON.stringify(json, null, 4).replace(/^"(.*)"$/, '$1').replace(/\\"/g, '');
      $('.result').val(result);
      alert(result);
    };

    function convert_btob_ja() {
      "use strict;";

      var encodedData = window.btoa(unescape(encodeURIComponent(document.getElementById('id_1').value)));
      document.getElementById('result1').innerHTML = encodedData;
    }

    function convert_atob_ja() {
      "use strict;";

      var decodedData = decodeURIComponent(escape(window.atob(document.getElementById('id_2').value)));
      document.getElementById('result2').innerHTML = decodedData;
    }
  }
};
window.onload = mainApp.init();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map