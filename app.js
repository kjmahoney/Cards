
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
    cardSegmentTop.className = "card-segment-top"

    var cardSegmentMiddle = document.createElement('div');
    cardSegmentMiddle.className = "card-segment-middle"

    var cardSegmentBottom = document.createElement('div');
    cardSegmentBottom.className = "card-segment-bottom"

    console.log(n + s)
    document.getElementsByClassName("card")[n + s].appendChild(cardSegmentTop)
    document.getElementsByClassName("card")[n+ s].appendChild(cardSegmentMiddle)
    document.getElementsByClassName("card")[n + s].appendChild(cardSegmentBottom)

    document.getElementsByClassName("card-segment-top")[n + s].innerHTML = i + suit[s]
    document.getElementsByClassName("card-segment-middle")[n + s].innerHTML = suit[s]
    document.getElementsByClassName("card-segment-bottom")[n + s].innerHTML = i + suit[s]
  }


  // if (i === 11){
  //   console.log("J")
  // }
  // else if(i===12){
  //   console.log("Q")
  // }
  // else if(i===13){
  //   console.log("K")
  // }
  // else if(i===14){
  //   console.log("A")
  // }
  // else{
  //   console.log(i)
  // }

}

var apple = document.getElementsByClassName("card")
console.log(apple.length)
