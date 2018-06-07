$(function () {
    $('#dialog').dialog({
        autoOpen: false,
        width: 600,
        //title: 'Jquery ui‚ðŽg‚Á‚½Dialog',
        //modal: true,
        resizable: false,
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $('#dialog_link').click(function () {
        $('#dialog').dialog('open');
        return false;
    });
});
