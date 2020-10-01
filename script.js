jQuery(document).ready(function() {

    var now = $("#currentDay") 
    now.text(moment().format("LLLL"));

    var textarea = $(".textarea")

    var currentHour = moment().format('h');

    console.log('currentHour:', currentHour)

    var hours = $("span");

    var hoursNum = hours.text().split(/AM|PM| /);
    console.log('hoursNum:', hoursNum)

    $.each(hoursNum, function(index, value) {
        console.log(index, value);
        // if (currentHour.isSame(value)) {
        //     textarea.addClass("present");
        // }
        
        // if (currentHour.isBefore(value)) {
        //     textarea.addClass("future");
        // }

        // if (currentHour.isAfter(value)) {
        //     textarea.addClass("past");
        // }
    });

});
