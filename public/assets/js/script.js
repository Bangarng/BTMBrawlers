var hideWelcome = function() {
    $("#welcomeScreen").addClass("hidden");
}

//this constructo makes our static characters
var characterMaker = function(charName, attack, defense, intellect) {
    this.charName =  charName;
    this.attack =  attack;
    this.defense = defense;
    this.intellect =  intellect;
};

var itemMaker = function(itemName, itmAttack, itmDefense, itmIntellect){

    this.itemName = itemName;
    this.itmAttack = itmAttack;
    this.itmDefense = itmDefense;
    this.itmIntellect = itmIntellect;
};
//creating the different constructors of characters
//tech glasses give defense - can anticipate enemy moves gives boosted defense, cape of strength increases dmgs
var heroWep1 = new itemMaker("Tech Glasses", 0, 15, 4);
var heroWep2 = new itemMaker("Cape of Strength", 10, 0, 0);

//drainer helm - takes intellect from enemy and increases sidekicks intellect, grapple guns increases speed, increasing his defense because he is harder to hit
var sidekickWep1 = new itemMaker("Drainer Helm", 0, 0, 20);
var sidekickWep2 = new itemMaker("Dual Grapple Guns", 0, 15, 0);

//black belt - increases all stats in attack dmg, defense, and hit(int), passive skill of melee strength
var shadowtakenWep1 = new itemMaker("Black Belt", 10, 10, 10);
var shadowtakenWep2 = new itemMaker("Increased Melee Prowness - Passive", 15, 0, 0);

//Moth wings - gives flight and increases defense, Moth vision - anticipates enemy attacks, granting mothman hit chance and defense
var mothmanWep1 = new itemMaker("Moth Wings", 0, 30,0 );
var mothmanWep2 = new itemMaker("Moth Vision Goggles", 0, 10, 10);


//this is the static characters

console.log(Sidekick);
//stats total 60
var Hero = new characterMaker("Hero", 20, 20, 20); //full stack brawler
var Sidekick = new characterMaker("Sidekick", 15, 20, 25); //duel grapple guns, intellect, reach
var Shadowtaken = new characterMaker("Shadowtaken", 30, 15, 15); //triple black belt with grapple gun
var Mothman = new characterMaker("Mothman", 10, 40, 10); //can fly, speaks gibberish, here for the free spread


//this will hold the variable that are pushed in here to be called by the submit onclic
var charArr = ["holder"];
var itemArr = ["holder"];
var heroArr = [heroWep1, heroWep2];
var sidekickArr = [sidekickWep1, sidekickWep2];
var shadowtakenArr = [shadowtakenWep1, shadowtakenWep2];
var mothmanArr = [mothmanWep1, mothmanWep2];


console.log(charArr);



var selectHero = $("#heroCharacter");
var selectSidekick = $("#sidekickCharacter");
var selectShadowtaken = $("#shadowtakenCharacter");
var selectMothman = $("#mothmanCharacter");
console.log(heroWep1);




function renderHeroButtons(){
    for(var i=0; i<heroArr.length; i++){
        $("#itembuttons").append("<button>"+heroArr[i].itemName+"</button>");
        
                event.preventDefault();
                console.log(heroArr[i]);

})
}

  

//this takes a onclick, grabs the variable of the character and pushes it to the charArr
selectHero.on("click", function (event) {
    
    var attackBoost = heroWep1.itmAttack + heroWep2.itmAttack;
    var defBoost = heroWep1.itmDefense + heroWep2.itmDefense;
    var intBoost = heroWep1.itmIntellect + heroWep2.itmIntellect;

  

    itemArr.splice(0,1,heroArr);
    console.log(heroArr);  
    charArr.splice(0,1,Hero);
    for(var i=0; i<heroArr.length; i++){
        $("#itembuttons").append("<button>"+heroArr[i].itemName+"</button>");
        
                event.preventDefault();
                console.log(heroArr[i]);
            
           
       

    }
 
    Hero.attack += attackBoost;
    Hero.defense +=defBoost; 
    Hero.intellect += intBoost;
    console.log(charArr);
    event.preventDefault();
});
selectSidekick.on("click", function (event) {
    var attackBoost = sidekickWep1.itmAttack + sidekickWep2.itmAttack;
    var defBoost = sidekickWep1.itmDefense + sidekickWep2.itmDefense;
    var intBoost = sidekickWep1.itmIntellect + sidekickWep2.itmIntellect;
    
    charArr.splice(0,1,Sidekick);
    Sidekick.attack += attackBoost;
    Sidekick.defense +=defBoost; 
    Sidekick.intellect += intBoost;

    console.log(charArr);
    event.preventDefault();
});
selectShadowtaken.on("click", function (event) {
    var attackBoost = shadowtakenWep1.itmAttack + shadowtakenWep2.itmAttack;
    var defBoost = shadowtakenWep1.itmDefense + shadowtakenWep2.itmDefense;
    var intBoost = shadowtakenWep1.itmIntellect + shadowtakenWep2.itmIntellect;
   
    charArr.splice(0,1,Shadowtaken);
    Shadowtaken.attack += attackBoost;
    Shadowtaken.defense +=defBoost; 
    Shadowtaken.intellect += intBoost;

    console.log(charArr);
    event.preventDefault();
});
selectMothman.on("click", function (event) {
    var attackBoost = mothmanWep1.itmAttack + mothmanWep2.itmAttack;
    var defBoost = mothmanWep1.itmDefense + mothmanWep2.itmDefense;
    var intBoost = mothmanWep1.itmIntellect + mothmanWep2.itmIntellect;
    
    charArr.splice(0,1,Mothman);
   
    Mothman.attack += attackBoost;
    Mothman.defense +=defBoost; 
    Mothman.intellect += intBoost;
    console.log(charArr);
    event.preventDefault();
})

//lets a button be active for when we input data?

var header = document.getElementById("myID");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


$(function() {
    //continue game
    $("#continueGame").on("click", function(event) {
        hideWelcome();
        $("#userInfo").removeClass("hidden");
        $("#userInfo").addClass("fadeInUp animated")
    });
    //create a new game
    $("#newGame").on("click", function(event) {
        hideWelcome();
        $("#createUser").removeClass("hidden");
        $("#createUser").addClass("fadeInUp animated")
    });

    $("#submitUser").on("click", function(event) {
        //prevent page from reloading
        event.preventDefault();
        //our user data that will be pushed. this is where the brawlercontroller will be grabbing
        var userdata = {
            userName: $("#userNameInput").val().trim(),
            password: $("#passwordInput").val().trim(),
            charName: charArr[0].charName,
            attack: charArr[0].attack,
            defense: charArr[0].defense,
            intellect: charArr[0].defense,
            bossOne: false,
            bossTwo: false, 
            bossThree: false
        };

        //here is the call from the controller
        $.ajax("/createuser", {
            type: "POST",
            data: userdata
        }).then(
            function(data){
            console.log(data);
            window.location = "/api";
            }
        )

    });

    $("#backHome").on("click", function(){
        event.preventDefault();
        window.location.href = ("/");

    })

});