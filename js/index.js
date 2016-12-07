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
    const getUserName=(InputName, statObject)=>{
        var name = inputName;
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
    return{
        createDeck:createDeck,
        moveItemsToDeck:moveItemsToDeck,
        initiateUserStats:initiateUserStats,
        initiateUserStatsNoLevel:initiateUserStatsNoLevel,
        goUpALevel:goUpALevel,
        goDownALevel:goDownALevel,
        getUserName:getUserName
    };
})();
var userStats = munchkin.initiateUserStats();
var UserStatsNoLevel = munchkin.initiateUserStatsNoLevel();
var deck = munchkin.createDeck();
munchkin.goUpALevel(userStats);
munchkin.goUpALevel(userStats);
munchkin.getUserName('bob');
console.log(userStats);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.moveItemsToDeck(deck,1,2,4,5,6,7);
munchkin.goDownALevel(userStats);
console.log(userStats);
console.log(UserStatsNoLevel);
console.log(deck);
