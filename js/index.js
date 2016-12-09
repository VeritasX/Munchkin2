var munchkin=(function gameMaker (){
    const createDeck = ()=>{return [];};
    const createCards = (id, cardName, cardType, points, runAway, cardValue) => (
        { id,cardName, cardType, points, runAway, cardValue});
    const moveItemsToDeck = (array, id, cardName, cardType, points, runAway, cardValue ) => {
        array.push(createCards(id, cardName, cardType, points, runAway, cardValue));
    };
    const initiateUserStats=()=>({
        name:null,
        level:1,
        points:0,
        strength:0,
        runAway:0,
        totalWorth:0
    });
    const initiateUserStatsNoLevel=()=>({
        name:null,
        points:0,
        strength:0,
        runAway:0
    });
    const getUserName=(inputName, statObject)=>{
        const name = inputName;
        statObject.name = name;
    };
    const goUpALevel=(statObject)=>{
        statObject.level+=1;
    };
    const goDownALevel =(statObject)=>{
        if(statObject.level > 1){
            statObject.level -=1;
        }
    };
    const getMyCardAndtoHolding = (card, userDeck, deck)=>{
        const userCard = card;
        let sendToDeck;
        for(let i = 0;i < deck.length; i++){
            if(deck[i].id === userCard){
                sendToDeck = deck[i];
            }else{
                console.log('didNotMatch');
            }
        }
        userDeck.push(sendToDeck);
    }
    return{
        createDeck:createDeck,
        moveItemsToDeck:moveItemsToDeck,
        initiateUserStats:initiateUserStats,
        initiateUserStatsNoLevel:initiateUserStatsNoLevel,
        goUpALevel:goUpALevel,
        goDownALevel:goDownALevel,
        getUserName:getUserName,
        getMyCardAndtoHolding:getMyCardAndtoHolding
    };
})();
var userStats = munchkin.initiateUserStats();
var UserStatsNoLevel = munchkin.initiateUserStatsNoLevel();
var deck = munchkin.createDeck();
var userDeck= munchkin.createDeck();

munchkin.goUpALevel(userStats);
munchkin.goUpALevel(userStats);
munchkin.getUserName('bob', userStats);
console.log(userStats);
munchkin.moveItemsToDeck(deck,2,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,3,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,4,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,5,2,4,5,6,7);
munchkin.goDownALevel(userStats);
munchkin.getMyCardAndtoHolding(1, userDeck, deck);
console.log(userDeck);


console.log(userStats);
console.log(UserStatsNoLevel);
console.log(deck);
