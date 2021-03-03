$( function() {
    $( "#datepicker" ).datepicker();
  } );
// button
	// get a refernce to all of the save buttons $('.saveBtn')
	// 01-Ins_jQuery-Elements and 02-Stu_jQuery-Elements
​
	// add a click handler to each save Button using .on() method
	// 03-Ins_Click-Events and 04-Stu_Click-Events - https://api.jquery.com/on/
​
	// traverse the DOM to get values that we need to store in localStorage .parent() .sibling()
	// 07-Ins_Dom-Traversal and 08-Stu_Dom-Traversal - https://api.jquery.com/category/traversing/
​
	// setItems in localStorage
	// unit 04
​
// handle color coding
	// use moment library to get the current hour
	// https://momentjs.com/docs/#/get-set/hour/
​
	//  get a refernce to all timeblocks
​
	// loop through the timeblocks
	// unit 03
​
		// get the data-hour value timeblocks[i].data('hour')
​
		// if, else - condition we compare the currentHour with the timeBlock < (past), === (present), else (future)
		// unit 03
​
		// adding or removing (or both) classes
​
​
// get the data from localstorage and populate the timeblocks
	// getItem
​
	// reference to the textarea (id)
​
	// .val()
​
	// approach
	// -> $('textarea');
	// -> loop
	// -> get a reference to the id of .parent()
	// -> .val() = localStorage.getItem(parentID)
​
// current day -> top of calendar
	// moment library - .format()
	// 25-Ins_Moment-Format and 26-Stu_Moment-Format - https://momentjs.com/docs/#/displaying/
​
// call the colorCoding function
// setInterval -> 15000
// unit 04
