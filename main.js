    "use strict;"

    document.addEventListener("DOMContentLoaded", function(event) {
        "use strict";

        document.getElementById("ID_BTN_JSON").addEventListener("click", app.getJSON , false);
    });

    var app = {};

    app.getJSON = function() {
        "use strict;"

        var result = document.getElementById("ID_TXT_JSON").value;

        //  if ( result.match(",") {
        //     result = result.replace(",", ",\r\n");
        //  }

        alert(JSON.stringify(result));
    }
