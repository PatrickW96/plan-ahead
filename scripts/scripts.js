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
    isAtWork();
    classSelector();

    // DYNAMICALLY CREATING APPS BODY LAYOUT
    function createTimeblock() {
        for (var i = 0; i < businessHours.length; i++) {
            var mainDiv =`<div class="row border my-2 mx-1 time-block block${businessIndex[i]}" data-number="${businessIndex[i]}">` +
                         `<p class="time-hour col-md-1">${businessHours[i]}</p>` +
                         `<div class="displayTodo col-md-9">` +
                         `<div class="storedTodo"></div>` +
                         `<textarea class="plan-here${businessIndex[i]}"></textarea>` +
                         `</div>` +
                         `<div class="col-md-2">` +
                         `<button class="col-md-5 clearBtn ml-1"><i class="fas fa-check"></i></button>` +
                         `<button class="col-md-5 saveBtn"><i class="fas fa-save"></i></button>` +
                         `</div>`;
            $('main').append(mainDiv);
        }    
    }

    // FUNCTION TO DISPLAY CURRENT DAY 
    function currentDate() {
        $('#currentDay').text(days[getDay] + ", " + months[getMonth] + getDate);
    }

    // FUCNTION THAT DETERMINES IF APP SHOULD BE ACTIVE OR NOT 
    function isAtWork() {
        if (hours >= 9 && hours <= 17) {
            atWork = true;
        } else {
            atWork = false;
        }    
    };

    // CHANGE TIMEBLOCK BACKGROUND COLOR BASED ON HOUR 
    function classSelector() {
        if (atWork !== false) {
            $('[data-number]').each(function() {
                if ($(this).data('number') === hours) {
                    $(this).removeClass('future past').addClass('present');
                }
                if ($(this).data('number') > hours) {
                    $(this).removeClass('present past').addClass('future');
                }
                if ($(this).data('number') < hours) {
                    $(this).removeClass('future present').addClass('past');
                }          
            });
        }
    }
// ==================================================================================
// ==================================================================================
    // TODO FUNCTIONS
    $('.plan-here9').html(localStorage.getItem('todo9'));
    $('.plan-here10').html(localStorage.getItem('todo10'))
    $('.plan-here11').html(localStorage.getItem('todo11'))
    $('.plan-here12').html(localStorage.getItem('todo12'))
    $('.plan-here13').html(localStorage.getItem('todo13'))
    $('.plan-here14').html(localStorage.getItem('todo14'))
    $('.plan-here15').html(localStorage.getItem('todo15'))
    $('.plan-here16').html(localStorage.getItem('todo16'))
    $('.plan-here17').html(localStorage.getItem('todo17'))

    // FUNCTION TO SAVE TODO TASK FOR EACH TIMEBLOCK TO LOCAL STORAGE
    function addTask() {
        localStorage.setItem(`todo${$(this).parent().parent().attr(`data-number`)}` , $(this).parent().prev().children('textarea').val());
    }

    // TO CLEAR ITEM OF LIST WHEN TASK IS COMPLETE
    function clearButton() {
        localStorage.removeItem(`todo${$(this).parent().parent().attr(`data-number`)}`);
        $(this).parent().prev().children('textarea').val(" ");
    }

    // ADDING EVENT LISTENERS TO CLEAR/SAVE BUTTONS
    $('.saveBtn').on('click' , addTask);
    $('.clearBtn').on('click' , clearButton);
});