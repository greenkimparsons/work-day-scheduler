var currentDateTimeSpan = $("#current-date-time");
// var currentDateTimeSpan = document.querySelector("#current-date-time");
console.log(currentDateTimeSpan);
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelector(".description");
// var inputArea = $("#planner-input");



function updateCurrentTime(){
    currentDateTimeSpan.text(moment().format("MMMM Do YYYY"));
}

var timeBlock = document.querySelectorAll(".time-block");
console.log(timeBlock);
updateCurrentTime();

//if current it's red
//if green it's future
//if grey, time has passed

//dynamically change the color of the row depending on the time
//two ways to do this 1. hardcode everything to start, then set the hour
//2. dynamically generate the rows in a for loop
// var saveButton = $("#save-button");


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var usersPlan = textArea.value;
    var keyID = timeBlock[i];
    var value = textArea.value;
    // if (usersPlan === "") {
    //   displayMessage("success", "Added to planner");
  
      localStorage.setItem(keyID, value);
    //   savePlan();
    // }
  });

  for(var i = 0; i < timeBlock.length; i++){
      var timeVar = timeBlock[i];
      console.log(timeVar);
  }

  function savePlan() {
    var usersPlan = localStorage.getItem(textArea.value);
  
    if (!usersPlan) {
      return;
    }
  
    usersPlan.textContent = usersPlan;
  }

  function init () {
      var itemsFromStorage = JSON.parse(localStorage.getItem(textArea));//saves after refresh
      if (itemsFromStorage !== null) {
          times = itemsFromStorage;
      }
  }

  init();