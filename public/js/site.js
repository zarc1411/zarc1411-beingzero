// page is fully loaded 1)Get data fronm the server using url?/data //
$(document).ready(function () {
    $.getJSON("/data", function (d) {
        //alert(JSON.stringify(d));
        $("#name").text(d.name);
        $("#college").text(d.college);
        $("#regno").text(d.rno);


    })
})
