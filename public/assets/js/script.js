var hideWelcome = function() {
    $("#welcomeScreen").addClass("hidden");
}

var characterMaker = function(charName, attack, defense, intellect) {
    this.charName =  charName;
    this.attack =  attack;
    this.defense = defense;
    this.intellect =  intellect;
};
//stats total 60
var Hero = new characterMaker("Hero", 20, 20, 20); //full stack brawler
var Sidekick = new characterMaker("Sidekick", 15, 20, 25); //duel grapple guns, intellect, reach
var Shadowtaken = new characterMaker("Shadowtaken", 30, 15, 15); //triple black belt with grapple gun
var Mothman = new characterMaker("Mothman", 10, 40, 10); //can fly, speaks gibberish, here for the free spread


var characterSelection = function(event) {
    $("#heroCharacter").on("click", function (event) {
        event.preventDefault();
    });
    $("#sidekickCharacter").on("click", function (event) {
        event.preventDefault();
    });
    $("#shadowtakenCharacter").on("click", function (event) {
        event.preventDefault();
    }),
    $("#mothmanCharacter").on("click", function (event) {
        event.preventDefault();
    })
};

characterSelection();

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
        event.preventDefault();
        var userdata = {
            userName: $("#userNameInput").val().trim(),
            password: $("#passwordInput").val().trim(),
            // charName: characterSelection().charName,
            // attack: characterSelection().attack,
            // defense: characterSelection().defense,
            // intellect: characterSelection().defense
        };

        console.log(userdata);
    });

});