"use strict;"

export function activeEventLoad() {

    "use strict";
    console.log("getEventLoad");

    document.addEventListener("DOMContentLoaded", function (event) {
        console.log("DOMContentLoaded");
        document.getElementById("idCopyRight").innerHTML = new Date().getFullYear();

        document.getElementById("ID_BTN_JSON").addEventListener("click", app.getJSON, false);
    });

    var app = {};

    app.getJSON = function () {

        var json = JSON.parse($('.json').val());
        var result = JSON.stringify(json, null, 4).replace(/^"(.*)"$/, '$1').replace(/\\"/g, '');
        $('.result').val(result);

        alert(result);
    }

    console.log("app");
}

activeEventLoad();
