
function newElements(){

  // dynamically adding all the html elements with this function.

    let counter = 0
    let arr = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];
    let dC1 = 'row time-block';
    let dC2 = 'col-2 col-md-1 hour text-center py-3';
    let tA = 'col-8 col-md-10 description';
    let bT = 'btn saveBtn col-2 col-md-1';
    let i = 'fas fa-save';


    //===============================================
    for(counter; counter < arr.length; counter++){
      let $newDiv = $("<div/>")
        .attr("id", arr[counter])
        .addClass(dC1);
      $(".container-lg").append($newDiv);
    }
      
      let $newDivChild = $("<div/>")
      .addClass(dC2)
      //.html(arr2[counter]);
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

function realTime() {


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
 // function for save button.
  $('.saveBtn').click(function(){
    
    let
    

  })
  


});
