// Moment declaration for day and time 
moment(Date);
$("#currentDay").text(moment().format('ddd, MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
// START OF DAY +9 TO START WORKDAY SCHEDULER AT 9AM
var beforeTime = moment().startOf('day').add(9, "hours");

// TIME BLOCKS
// 9 AM 
var time1 = beforeTime.add(0, "h");
// TIME FORMAT
time1 = time1.format('hh A');
// ADDS INTO HTML
$(".block1").text(time1);

// 10 AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh A');
$(".block2").text(time2);

// 11 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh A');
$(".block3").text(time3);

// 12 PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh A');
$(".block4").text(time4);

// 1 PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh A');
$(".block5").text(time5);

// 2 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh A');
$(".block6").text(time6);

// 3 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh A');
$(".block7").text(time7);

// 4 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh A');
$(".block8").text(time8);

// 5 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh A');
$(".block9").text(time9);

