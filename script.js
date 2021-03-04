	var newText;
	var newTime;
	var currentTime;
	var hourBlocks;
	var timeColor = $(".time-block");
	var currentDay = $("#currentDay");


	colorCode();
	// get a refernce to all of the save buttons $('.saveBtn')
	$(".saveBtn");
	// create an array containing the hour blocks
	hourblocks = [
	$(".time-block nine"),
	$(".time-block ten"),
	$(".time-block eleven"),
	$(".time-block twelve"),
	$(".time-block one"),
	$(".time-block two"),
	$(".time-block three"),
	$(".time-block four"),
	$(".time-block five"),
]
// loop through the array containing the hour s
function innerTimeBlocks() {

for (var i = 0; i < hourblocks.length; i++) {
	console.log(timeBlocks[i]);
}
};
// on click function each of the save buttons
	$(".saveBtn").on("click", function () {
	 newText = $(".saveBtn").siblings(".description").val();
	 newTime = $(".saveBtn").parent().attr("id");

	 localStorage.setItem(newTime, newText)
	});
// function for current time
	function time() {
	currentTime = moment().format("hA");
	console.log(currentTime)
};
// function for current day
function day() {
	var today = moment().format("dddd, MMM Do YY");
	console.log(today);
}
function colorCode() {
	if (timeColor < currentTime) {
		timeColor.classList.add(".past");
	} else if (timeColor = currentTime) {
		timeColor.classList.remove(".past");
		timeColor.classList.add(".present");
	}else {
		timeColor.classList.remove(".present");
		timeColor.classList.add(".future");
	}
}

// set items to local storage
localStorage.setItem("#nine", ".description");
localStorage.setItem("#ten", ".description");
localStorage.setItem("#eleven", ".description");
localStorage.setItem("#twelve", ".description");
localStorage.setItem("#one", ".description");
localStorage.setItem("#two", ".description");
localStorage.setItem("#three", ".description");
localStorage.setItem("#four", ".description");
localStorage.setItem("#five", ".description");

// functions called
time();
day();
colorCode();

// function colorCode() {
// 	if
// }

// maybe make time block intoa variable for colorcode function
// this keeps yielding undefined

// if current time is before change class to before if pressent present if after after etc.
// ​	$(".timeblock")
// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// };


	// add a click handler to each save Button using .on() method

	// 03-Ins_Click-Events and 04-Stu_Click-Events - https://api.jquery.com/on/
// ​
	// traverse the DOM to get values that we need to store in localStorage .parent() .sibling()
	// 07-Ins_Dom-Traversal and 08-Stu_Dom-Traversal - https://api.jquery.com/category/traversing/
	// setItems in localStorage
	// unit 04
// ​
// handle color coding
	// use moment library to get the current hour
	// https://momentjs.com/docs/#/get-set/hour/
// ​
	//  get a refernce to all timeblocks
// ​	$(".timeblock")
// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// }

// set items to local storage
// localStorage.setItem("#nine", ".description");
// localStorage.setItem("#ten", ".description");
// localStorage.setItem("#eleven", ".description");
// localStorage.setItem("#twelve", ".description");
// localStorage.setItem("#one", ".description");
// localStorage.setItem("#two", ".description");
// localStorage.setItem("#three", ".description");
// localStorage.setItem("#four", ".description");
// localStorage.setItem("#five", ".description");


// // get items from local storage
// $("#nine").val(localStorage.getItem("#nine"));
// $("#ten").val(localStorage.getItem("#ten"));
// $("#eleven").val(localStorage.getItem("#eleven"));
// $("twelve").val(localStorage.getItem("#twelve"));
// $("#one").val(localStorage.getItem("#one"));
// $("#two").val(localStorage.getItem("#two"));
// $("#three").val(localStorage.getItem("#three"));
// $("#four").val(localStorage.getItem("#four"));
// $("#five").val(localStorage.getItem("#five"));
// 	// loop through the timeblocks
	// **maybe turn them into an array first?
	// unit 03
		// get the data-hour value timeblocks[i].data('hour')
		// if, else - condition we compare the currentHour with the timeBlock < (past), === (present), else (future)
		// unit 03
		// adding or removing (or both) classes
// get the data from localstorage and populate the timeblocks
	// getItem
	// reference to the textarea (id)
	// .val()
	// approach
	// -> $('textarea');
	// -> loop
	// -> get a reference to the id of .parent()
	// -> .val() = localStorage.getItem(parentID)
// current day -> top of calendar
	// moment library - .format()
	// 25-Ins_Moment-Format and 26-Stu_Moment-Format - https://momentjs.com/docs/#/displaying/
// call the colorCoding function
// setInterval -> 15000
// unit 04
// color coding function


// should I wrap my whole code in  $( document ).ready(function() {

    // Your code here.

// });
