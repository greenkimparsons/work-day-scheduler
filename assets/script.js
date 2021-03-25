var currentDateTimeSpan = $("#current-date-time");

function updateCurrentTime(){
    currentDateTimeSpan.text(moment().format("MMMM Do YYYY"));
}


updateCurrentTime();