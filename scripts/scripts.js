$(document).ready(function() {
    // TIME DISPLAY - necessary variables 
    var date = new Date();
    var getMonth = date.getMonth();
    var getDay = date.getDay();
    var getDate = date.getDate().toString();
    var hours = date.getHours();
    var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    var businessHours = ["9AM" , "10AM" , "11AM" , "12PM" , "1PM" , "2PM" , "3PM" , "4PM" , "5PM"];
    var businessIndex = [9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17]; 
    var atWork = false;

    currentDate();
    createTimeblock()
    function currentDate() {
        $('#currentDay').text(days[getDay] + ", " + months[getMonth] + getDate);
    }

    // CREATING APPS BODY LAYOUT
    function createTimeblock() {
        for (var i = 0; i < businessHours.length; i++) {
            var mainDiv =`<div class="row border my-2 mx-1 time-block">` +
                         `<p class="time-hour0 col-md-1" data-number="${i}">${businessHours[i]}</p>` +
                         `<div class="displayTodo col-md-9">` +
                         `<div class="storedTodo"></div>` +
                         `<textarea class="plan-here"></textarea>` +
                         `</div>` +
                         `<div class="col-md-2">` +
                         `<button class="col-md-5 clearBtn ml-1"><i class="fas fa-check"></i></button>` +
                         `<button class="col-md-5 saveBtn"><i class="fas fa-save"></i></button>` +
                         `</div>`;
            $('main').append(mainDiv);
        }    
    }
})
