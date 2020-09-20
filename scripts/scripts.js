$(document).ready(function() {
    // Creating necessary var to store date 
    var date = new Date();
    var getMonth = date.getMonth();
    var getDay = date.getDay();
    var getDate = date.getDate().toString();
    var getHours = date.getHours();
    var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    var hours = ["12AM" , "1AM" , "2AM" , "3AM" , "4AM" , "5AM" , "6AM" , "7AM" , "8AM" , "9AM" , "10AM" , "11AM" , "12PM" , "1PM" , "2PM" , "3PM" , "4PM" , "5PM" , "6PM" , "7PM" , "8PM" , "9PM" , "10PM" , "11PM"];
    var businessHours = ["9AM" , "10AM" , "11AM" , "12PM" , "1PM" , "2PM" , "3PM" , "4PM" , "5PM"];
    var atWork = false;
    // Displaying date
    $('#currentDay').text(days[getDay] + ", " + months[getMonth] + " " +getDate + "th");

    for (var k = 0; k < businessHours.length; k++) {
        $('.time-hour' + k).text(businessHours[k]);
    }
    
    
    if (hours[getHours] === businessHours[0]) {
        atWork = true;
    }

    if (atWork == true) {
       for (var l = 0; l < businessHours; l++) {
            if ($('box-' + l).attr('value') == hours[getHours])
                $('box-' + l).addClass('present');
       } 
    }

    // function classSelector() {
        
    // }

    console.log($('.time-block').attr('value'))

// -------------------------------------------------------------
// -------------------------------------------------------------
    var todo = {
        todoItem : []
    };
    var todoList = [];
    
    retrevingStoredItem();
    
    $('.saveBtn').on('click' , addTask);


    function addTask() {
        storeTask();
        todo.todoItem.push($(this).parent().prev().children('textarea').val());

        console.log(todo.todoItem)    

        if (todo.todoItem !== "") {
            todoList.push(todo);
            console.log(todoList)    
            clearText();
            storeTask();
        }
    }

    function retrevingStoredItem() {
        for (var j = 0; j < todoList.length; j++)
            var storage = localStorage.getItem('todo ' + j);
            $(this).parent().prev().children('div').append($(`<span>${storage}</span>`));
            console.log(storage) 
    }

    function storeTask() {
        for (var i = 0; i < todoList.length; i++) {
            localStorage.setItem('todo '+ i , JSON.stringify(todo.todoItem[i]));
        }
    }
        // $('button').parent().prev().children('div').text("Text is here")

    function clearText() {
        $('.plan-here').val(" ");
    }


// Doc.ready closing tag
})