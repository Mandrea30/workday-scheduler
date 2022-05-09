// present day format

var currentDay = moment(new Date()).format("MM/DD/YYYY");
$("#currentDay").text(currentDay);

function timeBlockColor() {
    //present hour
    var hour = moment().hours();

    // change color depending if it's past, current or future task
    $(".time-block").each(function() {

        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// function to save tasks when 'save' button is clicked
timeBlockColor();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var todo = $(this).siblings(".todo").val();

    localStorage.setItem(time, todo);
});


// display tasks on refresh
function saveTodo() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTodo = localStorage.getItem(currentHour);

        if(currentTodo !== null) {
            $(this).siblings(".todo").val(currentTodo);
        }
  }) 
};

// call function
saveTodo();