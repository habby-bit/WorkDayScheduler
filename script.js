jQuery(document).ready(function() {

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
    
    // Looping through every textarea and hour to change class based on the time of day.

    textArray.forEach(function(value, index) {

        for (var i = 0; i < hoursArray.length; i++) {

            // console.log('currentHour == hoursArray:', currentHour == hoursArray[i])
            // console.log('currentHour > hoursArray:', currentHour > hoursArray[i])
            // console.log('currentHour < hoursArray:', currentHour < hoursArray[i])

            // console.log('currentHour:', currentHour)  
            // console.log('hoursArray[i]:', hoursArray[i])

            if (currentHour == hoursArray[i]) {   
                $("#" + value).addClass("present");
            }

            if (currentHour > hoursArray[i]) {
                $("#" + value).addClass("past");
            }

            if (currentHour < hoursArray[i]) {
                $("#" + value).addClass("future");
            }

        }

    });


    // How I would do this is I'd put an ID on the savebutton, like "save10". 
    // Then when a save button is clicked, use that ID, take the 10 off of it, 
    // and get the value out of the textarea using that number.  Then save the 
    // value to localStorage with that number as the key.
    // Then, when you go to render all the tasks, run through the possible numbers 
    // and get the value out of localstorage and put it into the texta area again.

    // Saving the input of the user to local storage.

    var saveBtn = $(".saveBtn")

     JSON.parse(localStorage.getItem("btnDigits")); 

    function storeEvents() {
        localStorage.setItem("btnDigits", JSON.stringify(textareaVal));
    }


    textarea.keyup(function(){
        var textareaClick = this.id
        console.log('textareaClick:', textareaClick)

        var textDigits = textareaClick.replace(/\D/g, "");
        console.log('textDigits:', textDigits)

        textareaVal = this.value;
        console.log('textareaVal:', textareaVal)

        saveBtn.click(function(event){
          event.preventDefault();
  
          var clickedBtn = this.id;
  
          var btnDigits = clickedBtn.replace(/\D/g, "");
  
          storeEvents();          
      });
    })


});