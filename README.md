# plan-ahead

#Summary
Plan Ahead is a way to keep up with any busy schedule, making time organization easier by design. With color coded timeblocks that indicate whether an hour is past, present, or soon to come, and use of local storage so the users tasks will be displayed even if the page is refreshed or closed, this app is efficient for all users no matter what the day brings. The key to success is to plan ahead so Plan Ahead.


#Coding Process Explained
This code should be easy to follow along with. I have broken the process into sections: A time display section and the section focused on taking a users todo tasks and storing each task for constant display. (Even after the page has been refreshed or closed the list will still be shown). I have also commented the code and organzined it into easy to read blocks. 

#TIME DISPLAY
First I created and stored the necessary time data into variables. I then manipulated those variables to get an accurate 'day, month date' display in the header of the application. I then created two arrays, bussinesHours and businessIndex. This first of the two was used to add business hour you see displayed to the left of each time block. The second of the arrays was used to compare with the current hour to decide if the work day has started or not. If the work day has infact started, there is a function in play that will add or remove the correct classes to timeblocks based on the hour and whether that hour is past, present, or future.

#TODO FUNCTIONS 
After getting the timing functions and display coded into the app I then shifted my focus to storing todo tasks into local storage with a key unique to each timeblock. I then displayed text to the textareas based on what the user had stored into local storage for the specific time-block. Once the user typed the task and clicked the save button the task was then stored and displayed. 

I also decided to add a completed button that can be clicked once a task is complete. Once the user has finished a task they simply click the button with the checkmark to remove the task from local storage. Afterwards, the textarea is reset to " ". 


#Conclusion
 Dyanmically created and coded with javascript this app was designed with one thing in mind: Making sure we can find balance is an overwhelmingly busy day to day life. Make sure to Plan Ahead.

 #Deplayed Link
 The application is hosted by githubpages at: https://patrickw96.github.io/plan-ahead/
 Make sure to check it out! 

<img src ="images/Screen Shot 2020-09-22 at 12.33.38 PM.png">
<img src ="images/Screen Shot 2020-09-22 at 12.34.54 PM.png">
<img src ="images/Screen Shot 2020-09-22 at 12.34.46 PM.png">
