// Reference moment.js
var currentDay = moment(); //Global variable
// reference the whole task
var timeBlockEl = document.querySelector('.container'); //Global variable

// Displays the current date and time
$('#currentDay').text(currentDay.format('LLLL'));

// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  var textVal = $(this).siblings('.description').val();
  var time_key = $(this).parent().attr('id');
  localStorage.setItem(time_key, textVal);
});

// Get item from local storage

for(var i = 0; i < 24; i++){
    $('#hour'+i+' .description').val(localStorage.getItem('hour'+i));    
}

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

function Tasks() {
  
  var currentHour = currentDay.hours();
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);
    if (timeId < currentHour) {
      $(this).addClass('past');
    }
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
Tasks();

// Use setTimeout to update the time every minute
setTimeout(function () {
  location = '';
}, 1000 * 60);