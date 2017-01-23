//declare an array with suits
var suit = [`♠`, '♥', '♦', '♣']
//create card and innerHYML for each suit
var n = -4
for (i=2;i<15; i++){
  n = n + 4
  //while i is 2, make four cards, each with a different suit
  for (s=0;s<suit.length;s++){
    //Create a card
    var card = document.createElement('div');
    card.className = "card"
    document.getElementById("table").appendChild(card)

    //Add sub-divs to the four cards that were made
    var cardSegmentTop = document.createElement('div');
    cardSegmentTop.className = "card-segment top"

    var cardSegmentMiddle = document.createElement('div');
    cardSegmentMiddle.className = "card-segment middle"

    var cardSegmentBottom = document.createElement('div');
    cardSegmentBottom.className = "card-segment bottom"

    var suitDisplay = document.createElement('p');
    suitDisplay.className = "suit-display"

    //substitute symbols for face cards
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

    document.getElementsByClassName("card")[n + s].appendChild(cardSegmentTop)
    document.getElementsByClassName("card")[n + s].appendChild(cardSegmentMiddle)
    document.getElementsByClassName("card")[n + s].appendChild(cardSegmentBottom)

    document.getElementsByClassName("top")[n + s].innerHTML = number + suit[s]
    document.getElementsByClassName("bottom")[n + s].appendChild(suitDisplay).innerHTML = number + suit[s]
    // document.getElementsByClassName("bottom")[n + s].innerHTML = number + suit[s]


    if (i >= 11){
      var suitDisplay = document.createElement('p');
      suitDisplay.className = "suit-display big"
      document.getElementsByClassName("middle")[n + s].appendChild(suitDisplay).innerHTML = suit[s]
    }else{
    for (l = 0; l< i; l ++){
      var suitDisplay = document.createElement('p');
      suitDisplay.className = "suit-display"
      document.getElementsByClassName("middle")[n + s].appendChild(suitDisplay).innerHTML = suit[s]
    }
  }

  }

}
