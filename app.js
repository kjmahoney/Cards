//place three divs within the card
//place values in those divs






for (i=2;i<15; i++){

  var card = document.createElement('div');
  var cardSegmentTop = document.createElement('div');
  var cardSegmentMiddle = document.createElement('div');
  var cardSegmentBottom = document.createElement('div');


  card.className = "card"
  cardSegmentTop.id = "card-segment-top"
  cardSegmentMiddle.id = "card-segment-middle"
  cardSegmentBottom.id = "card-segment-bottom"


  document.getElementById("table").appendChild(card)
  var burger = document.getElementsByClassName("card")
  burger[i-2].appendChild(cardSegmentTop)
  burger[i-2].appendChild(cardSegmentMiddle)
  burger[i-2].appendChild(cardSegmentBottom)

  document.getElementById("card-segment-top").innerHTML = `♠`;
  document.getElementById("card-segment-middle").innerHTML = `♠`;
  document.getElementById("card-segment-bottom").innerHTML = `♠`;

//use switch case when  time to refactor
//Print the card number, for cards 11-14, print J,Q,K,A
  if (i === 11){
    console.log("J")
  }
  else if(i===12){
    console.log("Q")
  }
  else if(i===13){
    console.log("K")
  }
  else if(i===14){
    console.log("A")
  }
  else{
    console.log(i)
  }

}
