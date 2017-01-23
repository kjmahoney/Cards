function deal(){

  //clear cards in case table is already populated
  document.getElementById("table").innerHTML = '';

  //suits to be displayed on cards
  var suitArray = ['♥',`♠`, '♦', '♣']

  //variable n tracks how many cards have been created
  var n = -4

  //iterate through cards 2 through A
  for (i=2; i<15; i++){

    //add four to n because each iteration produces 4 cards
    var n = n + 4

    //For each number 2 through A, make four cards, each with a different suit
    for (s=0;s<suitArray.length;s++){

      //Create card
      var card = document.createElement('div');
      //diamonds and hearts are red
      if (s%2==0){
        card.className = "card red"
      }else{
        card.className = "card"
      }
      document.getElementById("table").appendChild(card)

      //Add top, middle, and bottom divs to each card in order to display card value
      var cardSegmentTop = document.createElement('div');
      cardSegmentTop.className = "card-segment top"
      document.getElementsByClassName("card")[n + s].appendChild(cardSegmentTop)


      var cardSegmentMiddle = document.createElement('div');
      cardSegmentMiddle.className = "card-segment middle"
      document.getElementsByClassName("card")[n + s].appendChild(cardSegmentMiddle)


      var cardSegmentBottom = document.createElement('div');
      cardSegmentBottom.className = "card-segment bottom"
      document.getElementsByClassName("card")[n + s].appendChild(cardSegmentBottom)

      //face cards display a letter instead of a number
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

      //place symbols on middle of card, based on card value. Face cards get one large symbol
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
      //place symbol and number on top and bottom of card
      var suitDisplay = document.createElement('p');
      suitDisplay.className = "suit-display"
      document.getElementsByClassName("top")[n + s].appendChild(suitDisplay).innerHTML = number + suitArray[s]
      var suitDisplay = document.createElement('p');
      suitDisplay.className = "suit-display"
      document.getElementsByClassName("bottom")[n + s].appendChild(suitDisplay).innerHTML = number + suitArray[s]
    }
  }
}

//clear cards from table
function clearCards(){
  document.getElementById("table").innerHTML = '';
}
