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
    

    var saveBtn = $(".saveBtn")

    var textarea;
    var saveBtn;

    var events = [];

    inIt();
  
      function renderEvents() {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
      
          textarea.append(event);
        }
      }

    function inIt() {
        var storedEvents = JSON.parse(localStorage.getItem("events"));      
        if (storedEvents !== null) {
          events = storedEvents;
        }
        renderEvents();
    }

    function storeEvents() {
        localStorage.setItem("events", JSON.stringify(events));
    }

    saveBtn.click(function(event){
        event.preventDefault();
          
        var textareaVal = textarea.val().trim();
          
        if (textareaVal === "") {
            return;
        }
          
        events.push(textareaVal);

        storeEvents();
        renderEvents();

        });



});