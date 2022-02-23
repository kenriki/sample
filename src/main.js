    "use strict;"

    document.addEventListener("DOMContentLoaded", function(event) {
        "use strict";

        document.getElementById("ID_BTN_JSON").addEventListener("click", app.getJSON , false);
    });

    var app = {};

    app.getJSON = function() {
        "use strict;"

        var json = JSON.parse($('.json').val());
        var result = JSON.stringify(json, null, 4).replace(/^"(.*)"$/, '$1').replace(/\\"/g, '');
        $('.result').val(result);

        alert(result);
    }
