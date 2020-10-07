jQuery(document).ready(function() {

    // Getting all local storage and displaying it

    $("#textarea9").val(localStorage.getItem("textarea9"))
    $("#textarea10").val(localStorage.getItem("textarea10"))
    $("#textarea11").val(localStorage.getItem("textarea11"))
    $("#textarea12").val(localStorage.getItem("textarea12"))
    $("#textarea1").val(localStorage.getItem("textarea1"))
    $("#textarea2").val(localStorage.getItem("textarea2"))
    $("#textarea3").val(localStorage.getItem("textarea3"))
    $("#textarea4").val(localStorage.getItem("textarea4"))
    $("#textarea5").val(localStorage.getItem("textarea5"))

    // Calling and displaying the current day and time

    var now = $("#currentDay") 
    now.text(moment().format("LLLL"));

    var textarea = $(".textarea")
    var currentHour = parseInt(moment().format("H"));

    // Creating an array of every hour

    var hoursArray = [];

    $('span').each(function(){
        hoursArray.push($(this).attr('id'))  
    })

    // Creating an array of every textarea

    var textArray = [];
    
    textarea.each(function(){
        textArray.push($(this).attr('id'))
    })
    
    // Looping through every textarea to change class based on the time of day.

    textArray.forEach(function(value, index) {
        var i = index
            
        if (currentHour == hoursArray[i]) {    
            $(`#${value}`).addClass("present");
        }

        else if (currentHour > hoursArray[i]) {
            $(`#${value}`).addClass("past");
        }

        else {
            $(`#${value}`).addClass("future");
        }
    });

    // Saving the input of the user to local storage.

    var saveBtn = $(".saveBtn")

    saveBtn.click(function(event){
        event.preventDefault();

        var textVal = event.target.parentElement.previousElementSibling.value;

        var textID = event.target.parentElement.previousElementSibling.id;

        localStorage.setItem(textID, JSON.stringify(textVal));     
    });
});