var munchkin=(function gameMaker (){
    let createDeck = ()=>{return [];};
    let createCards = (id, cardName, cardType, points, runAway, cardValue) =>(
        { id,cardName, cardType, points, runAway, cardValue});
    let moveItemsToDeck = (array, id, cardName, cardType, points, runAway, cardValue )=> {
        array.push(createCards(id, cardName, cardType, points, runAway, cardValue));
    };
     return{
        createDeck:createDeck,
        moveItemsToDeck:moveItemsToDeck
     
    };
})();

var deck = munchkin.createDeck();
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);


console.log(deck);
