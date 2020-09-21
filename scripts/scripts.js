$(document).ready(function() {
    // TIME DISPLAY
    var date = new Date();
    var getMonth = date.getMonth();
    var getDay = date.getDay();
    var getDate = date.getDate().toString();
    var getHours = date.getHours();
    var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    // var hours = ["12AM" , "1AM" , "2AM" , "3AM" , "4AM" , "5AM" , "6AM" , "7AM" , "8AM" , "9AM" , "10AM" , "11AM" , "12PM" , "1PM" , "2PM" , "3PM" , "4PM" , "5PM" , "6PM" , "7PM" , "8PM" , "9PM" , "10PM" , "11PM"];
    var businessIndex = [9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17];
    var businessHours = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8"]; 
    // var currentHour = hours[getHours];
    var atWork = false;

    currentDate();

    function currentDate() {
        $('#currentDay').text(days[getDay] + ", " + months[getMonth] + " " +getDate + "th");
    }

// ADDING/ REMOVING CLASSES BASED ON TIME OF DAY
    var indexCount = 0; 

    // indexCounter();
    classSelector();

    function indexCounter() {
        indexCount++;
        if (getHours !== businessIndex[indexCount]) {
            indexCounter();
        }
    }

    console.log($('.time-hour' + indexCount).text())

    function classSelector() {

        if ($('.time-hour' + indexCount).attr('data-number') === businessHours[indexCount]) {
            $('.time-hour' + indexCount).parent().addClass('present');
        } else if ($('.time').attr('data-number') > businessHours[indexCount]) {
            $('.time').parent().addClass('future');
        } else {
            $('.time').parent().addClass('past');
        }
    }



// console.log(atWork)


    // Start business day 
    // if (currentHour === businessHours[indexCounter]) {
    //     atWork = true;
    // }
    // console.log(atWork)
    // function dateCreator() {
    // if (atWork === true) {
    //    for (var l = 0; l < businessHours; l++) {
    //         if (businessHours[l] == $('.time-block').attr('data-number' , l)) {}
    //    } 
    // }
    // }

    // function classSelector() {
        
    // }


// ============================================================================
// ============================================================================
    var todo = '';
    var todoList = [];
    // retrevingStoredItem();
    
    $('.saveBtn').on('click' , addTask);

    function addTask() {
        
        todo = $(this).parent().prev().children('textarea').val();
        // console.log(localStorage.getItem('todo 3')); 

        if (todo !== "") {
            todoList.push(todo);
            for (var q = 0; q < todoList.length; q++) {
                $(this).parent().prev().children('.storedTodo').append($(`<p>`).text(
                    for (var j = 0; j < todoList.length; j++) {
                    localStorage.getItem('todo ' + j);
                });
            }
            clearText();
            storeTask();
        }
        console.log(todoList) ;
    }

    function retrevingStoredItem() {
        for (var j = 0; j < todoList.length; j++) {
            localStorage.getItem('todo ' + j);
        }
    
    }

    function storeTask() {
        for (var i = 0; i < todoList.length; i++) {
            localStorage.setItem('todo '+ i , todoList[i]);
        }
    }

    function clearText() {
        $('.plan-here').val(" ");
    }


// Doc.ready closing tag
})