jQuery(document).ready(function() {

    var now = $("#currentDay") 
    now.text(moment().format("LLLL"));

    var textarea = $(".textarea")

    var currentHour = moment().format('h a');

    console.log('currentHour:', currentHour)

    var hours = $("span");
    
    var array = [];
    
    hours.each(function () {
        array.push(this.innerHTML);
    });

    console.log('array:', array)

    var hoursNum = hours.split(/AM|PM/);
    console.log('hoursNum:', hoursNum)

    // $.each(hoursNum, function(index, value) {
    //     console.log(index, value);
        // if (currentHour.isSame(value)) {
        //     textarea.addClass("present");
        // }
        
        // if (currentHour.isBefore(value)) {
        //     textarea.addClass("future");
        // }

        // if (currentHour.isAfter(value)) {
        //     textarea.addClass("past");
        // }
    // });
    
    // How I would do this is I'd put an ID on the savebutton, like "save10". 
    // Then when a save button is clicked, use that ID, take the 10 off of it, 
    // and get the value out of the textarea using that number.  Then save the 
    // value to localStorage with that number as the key.
    // Then, when you go to render all the tasks, run through the possible numbers 
    // and get the value out of localstorage and put it into the texta area again.


    var saveBtn = $(".saveBtn")

    //  JSON.parse(localStorage.getItem("btnDigits")); 

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