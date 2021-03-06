    var hourBlocks;
    var currentDay = $("#currentDay");
    var timeBlocks = $(".time-block");
    var descriptions = $('.description');
    var date = $(".display-3");

    function init() {
    save();
    colorCode();
    setInterval(colorCode, 5000);
}
    function save() {
$(".saveBtn").on("click", function () {
    var newText = $(".saveBtn").siblings(".description").val();
    var newTime = $(".saveBtn").parent().attr("id");

    localStorage.setItem(newTime, newText)
});
}



    function colorCode() {
    var currentTime = moment().hour();
    for (let i = 0; i < timeBlocks.length; i++) {
        const element = timeBlocks[i];

        if ($(element).data("hour") < currentTime) {
            $(element).removeClass("present");
            $(element).removeClass("future");
            $(element).addClass("past");

        } else if ($(element).data("hour") === currentTime) {
            $(element).removeClass("past");
            $(element).removeClass("future");
            $(element).addClass("present");
        }else {
            $(element).removeClass("past");
            $(element).removeClass("present");
            $(element).addClass("future");
        }
    }
}
function getItems() {
    for (var i = 0; i < descriptions.length; i++) {
    var key = $(descriptions[i]).attr('id');
    $(descriptions[i]).val(localStorage.getItem(key));
}
}


var today = moment().format("dddd, MMM Do YYYY");
    date.text(today);

    init();


function init() {
    save();
    getItems();
    colorCode();
    setInterval(colorCode, 5000);

};
function getItem() {
	$("#nine .description").val(localStorage.getItem("nine"));
    $("#ten .description").val(localStorage.getItem("ten"));
    $("#eleven .description").val(localStorage.getItem("eleven"));
    $("#twelve .description").val(localStorage.getItem("twelve"));
    $("#thirteen .description").val(localStorage.getItem("thirteen"));
    $("#fourteen .description").val(localStorage.getItem("fourteen"));
    $("#fifteen .description").val(localStorage.getItem("fifteen"));
    $("#sixteen .description").val(localStorage.getItem("sixteen"));
    $("#seventeen .description").val(localStorage.getItem("seventeen"))

}
	//clear the data from local storage
$("#clear").on("click", function(){
  $(".textarea").val("");
  localStorage.clear();
});

init();

getItem();

