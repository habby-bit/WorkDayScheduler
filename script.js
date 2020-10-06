jQuery(document).ready(function() {

    var now = $("#currentDay") 
    now.text(moment().format("LLLL"));
    console.log("now: ", moment().format("LLLL"))

    var textarea = $(".textarea")

    var currentHour = moment().format('hA')
    console.log('currentHour:', currentHour)

    var hours = $("span");
    var hoursArray = [];
    
    hours.each(function () {
        hoursArray.push(this.innerHTML);
    });

    console.log('array:', hoursArray)

    hoursArray.forEach(function(hour, index){
        console.log('hour:', hour)

        console.log('Comparison: ', moment().isAfter(hour))
        console.log('moment: ', moment().format('hA'))

        // if (currentHour.isSame(hour)) {
        //     textarea.addClass("present");
        // }
        
        // if (currentHour.isBefore(hour)) {
        //     textarea.addClass("future");
        // }

        // if (currentHour.isAfter(hour)) {
        //     textarea.addClass("past");
        // }
    })

    
    // How I would do this is I'd put an ID on the savebutton, like "save10". 
    // Then when a save button is clicked, use that ID, take the 10 off of it, 
    // and get the value out of the textarea using that number.  Then save the 
    // value to localStorage with that number as the key.
    // Then, when you go to render all the tasks, run through the possible numbers 
    // and get the value out of localstorage and put it into the texta area again.


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