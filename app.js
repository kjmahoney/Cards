function deal(){

  //clear cards in case table is already populated
  document.getElementById("table").innerHTML = '';

  //suitArrays to be displayed on table
  var suitArray = [`♠`, '♥', '♦', '♣']
  //variable n simplifies iteration through suitArray
  var n = -4

  //iterate through cards 2 to A
  for (i=2; i<15; i++){
    n = n + 4
    //For each number 2-A, make four cards, each with a different suit
    for (s=0;s<suitArray.length;s++){

      //Create card
      var card = document.createElement('div');
      card.className = "card"
      document.getElementById("table").appendChild(card)

      //Add top, middle, and bottom divs to each card for styling purposes
      var cardSegmentTop = document.createElement('div');
      cardSegmentTop.className = "card-segment top"

      var cardSegmentMiddle = document.createElement('div');
      cardSegmentMiddle.className = "card-segment middle"

      var cardSegmentBottom = document.createElement('div');
      cardSegmentBottom.className = "card-segment bottom"

      document.getElementsByClassName("card")[n + s].appendChild(cardSegmentTop)
      document.getElementsByClassName("card")[n + s].appendChild(cardSegmentMiddle)
      document.getElementsByClassName("card")[n + s].appendChild(cardSegmentBottom)

      //give face cards a letter instead of number
      if (i === 11){
        var number = "J"
      }
      else if(i===12){
        var number = "Q"
      }
      else if(i===13){
        var number = "K"
      }
      else if(i===14){
        var number = "A"
      }
      else{
        var number = i
      }

      //place symbol and number in top and bottom of card
      var suitDisplay = document.createElement('p');
      suitDisplay.className = "suit-display"
      document.getElementsByClassName("top")[n + s].appendChild(suitDisplay).innerHTML = number + suitArray[s]
      var suitDisplay = document.createElement('p');
      suitDisplay.className = "suit-display"
      document.getElementsByClassName("bottom")[n + s].appendChild(suitDisplay).innerHTML = number + suitArray[s]

      //unless a face card, middle of card displays a suit symbol based on number value
      if (i >= 11){
        var suitDisplay = document.createElement('p');
        suitDisplay.className = "suit-display big"
        document.getElementsByClassName("middle")[n + s].appendChild(suitDisplay).innerHTML = suitArray[s]
      }else{
        for (l = 0; l< i; l ++){
          var suitDisplay = document.createElement('p');
          suitDisplay.className = "suit-display"
          document.getElementsByClassName("middle")[n + s].appendChild(suitDisplay).innerHTML = suitArray[s]
        }
      }

    }

  }

}

//clear cards from table
function clearCards(){
  document.getElementById("table").innerHTML = '';
}
