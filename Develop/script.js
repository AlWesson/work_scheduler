let t = 4; // this is for the display alertTimer fucntion. 
let b = 9;
function newElements(){

  // dynamically adding all the html elements with this function.

    let counter = 0
    let arr = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];
    let dC1 = 'row time-block';
    let dC2 = 'col-2 col-md-1 hour text-center py-3';
    let tA = 'col-8 col-md-10 description';
    let bT = 'btn saveBtn col-2 col-md-1';
    let i = 'fas fa-save';

    for(counter; counter < arr.length; counter++){
      let $newDiv = $("<div/>")
        .attr("id", arr[counter])
        .addClass(dC1);
      $(".container-lg").append($newDiv);
    }
      
      let $newDivChild = $("<div/>")
      .addClass(dC2)
      $(".row").append($newDivChild);
   
      let $newTxt = $("<textarea/>")
        .addClass(tA)
        .attr('rows', '3');
      $(".col-2").after($newTxt);

      let $newBt = $("<button/>")
        .addClass(bT)
        .attr('aria-label', 'save');
      $(".description").after($newBt);

      let $newI = $("<i>")
        .addClass(i)
        .attr('aria-hidden', 'true');
        $(".saveBtn").append($newI);
 
}

// fucntion to display date.
function realTime() {

  $("#currentDay").html(dayjs().format("dddd, MM-DD-YYYY"));
}

// fucntion for displaying a message to page when saving to localStorage.
function alertTimer() {
  $(".saveAlert").addClass("visible");
  let timerInterval = setInterval(function() {
      t--;
      if(t <= -1){ 
        $(".saveAlert").removeClass("visible");
        t = 4; // t = 4 because the if checks for -1;
        clearInterval(timerInterval);
        
      }
      
    }, 1000);
}

function hourOfDay(){
  let now = dayjs().hour();

  $(".time-block").each(function() {
    let thisHour = parseInt($(this).attr("id").split("-")[1]);

    if(thisHour < now){
      $(this).addClass("past");
    }
    if(thisHour === now){
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    if(thisHour > now){
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

  })
}

$(document).ready(function () {
  newElements();
  // number to keep track of the ids.
  let j = 9;
  
  // array of business hours.
  let arr2 = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
  
  // loop for dynamically inserting all times 9am - 5pm.
  for(let i = 0; i < 9; i++){
 $("#hour-" + j).children().eq(0).html(arr2[i]);
  j++;
  }

  realTime();
  hourOfDay();
  setInterval(hourOfDay,60000);

 // function for save button.
  $('.saveBtn').click(function(){
    
    let info = $(this).siblings(".description").val();
    let infoTime = $(this).parent().attr("id");

    localStorage.setItem(infoTime, info);
    
    alertTimer();

  });
  
  
  for(let a = 0; a < 9; a++){
    
  $("#hour-"+ b).children().eq(1).val(localStorage.getItem('hour-'+ b));
    b++;
  }

});
