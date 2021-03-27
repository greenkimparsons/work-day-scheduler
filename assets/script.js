var currentDateTimeSpan = $("#current-date-time");

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
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelector(".description");
console.log(textArea.value); //console.log to make sure it works 
// var inputArea = $("#planner-input");
var inputArea = document.querySelector("#planner-input");
// console.log(inputArea.value);

function savePlan() {
    var usersPlan = localStorage.getItem(inputArea);
  
    if (!inputArea) {
      return;
    }
  
    usersPlan.textContent = inputArea;
  }

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var usersPlan = inputArea.value;
    var keyID = "9";
    var value = textArea.value;
    // if (usersPlan === "") {
    //   displayMessage("success", "Added to planner");
  
      localStorage.setItem(keyID, value);
    //   savePlan();
    // }
  });


  // Jonathan's gem store example
  var timesAndTasks = $("#times-and-tasks");

  var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",];

//   function makeRow() {
//     timesAndTasks.empty();
//       for(var i = 0; i < time.length; i++){
//           var newRow = $("<div>").insertRow(0); //create a new row in a div
//           var timeCell = $("<div>").insertCell(0); //create a cell div
//           timeCell.addClass("col-3 col-md-4 col-xl-4"); //adding class col-2 to time cell
//           var timeText = timeCell.text(time[i]); //prints time text 
//           timeCell.append(timeText); //printing time onto time cell 
//           newRow.append(timeCell);
//           newRow.addClass("col-8"); //adding class col-8 to new row
//           newRow.append(saveButton); //appending save button to new row
//           timesAndTasks.append(newRow); //appending the new row in the container
//       }
//   }

  function init () {
      var itemsFromStorage = JSON.parse(localStorage.getItem("times"));//saves after refresh
      if (itemsFromStorage !== null) {
          times = itemsFromStorage;
      }
    //   makeRow();
  }

  timesAndTasks.on("click", saveButton, function(event){
      event.preventDefault();
      console.log($(this).attr("data-index")); //you get the index of the item arr
      var clickedIndex = $(this).attr("data-index"); //how to save the input at that index
      localStorage.setItem("number", textarea.value); //needs key value pair**
    //   makeRow();
  });

  init();