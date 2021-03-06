// Display today's day and date
  var currentDay = $("#currentDay");
  var timeBlocks = $(".time-block");
  var descriptions = $('.description');
  var date = $(".display-3");

var today = moment().format("dddd, MMM Do YYYY");
    date.text(today);
// var todayDate = moment().format('dddd, MMM Do YYYY');
// $("#currentDay").html(todayDate);

$(document).ready(function () {
// save values to local storage on click
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    function colorCode() {
        // current time.
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("h")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get items from local storage
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));

//clear the data from local storage
$("#clear").on("click", function(){
  $(".textarea").val("");
  localStorage.clear();
});

colorCode();

})

