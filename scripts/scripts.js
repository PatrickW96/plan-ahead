$(document).ready(function() {
    // Creating necessary var to store date 
    var date = new Date();
    var getMonth = date.getMonth();
    var getDay = date.getDay();
    var getDate = date.getDate().toString();
    var getHours = date.getHours();
    var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    var hours = ["12" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11"];
    // Displaying date
    $('#currentDay').text(days[getDay] + ", " + months[getMonth] + " " +getDate + "th");




// -------------------------------------------------------------
    var todoItem = "";
    // var todo = localStorage.setItem('todo' , todoItem);
  
  
    $('.saveBtn').on('click' , function() {
        todoItem = $(this).parent().prev().children('textarea').val();

        if (todoItem !== "") {
            localStorage.setItem('todo' , todoItem);
            $(this).parent().prev().children('div').append($('<p>' + localStorage.todo + "</p>"));
            
        }
    })

        // var todo = todoItem = $('.plan-here').val()
        // $('.storedTodo').append(pEl);
        // pEl.text(todo);
        
        // localStorage.setItem('todo' , pEl.text());


        // console.log(pEl.text())

// Doc.ready closing tag
})