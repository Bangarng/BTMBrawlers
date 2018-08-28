var hideWelcome = function() {
    $("#welcomeScreen").addClass("hidden");
}

var characterMaker = function(charName, attack, defense, intellect) {
    this.charName =  charName;
    this.attack =  attack;
    this.defense = defense;
    this.intellect =  intellect;
};
var Hero = new characterMaker("Hero", 20, 20, 15);
var Sidekick = new characterMaker("Sidekick", 15, 20, 13);
var Shadowtaken = new characterMaker("Shadowtaken", 10, 15, 25);
var Mothman = new characterMaker("Mothman", 30, 30, 5);


var characterSelection = function(event) {
    $("#heroCharacter").on("click", function (event) {
        event.preventDefault();
        
    });
    $("#sidekickCharacter").on("click", function (event) {
        event.preventDefault();
    });
    $("#heroCharacter").on("click", function (event) {
        event.preventDefault();
    }),
    $("#heroCharacter").on("click", function (event) {
        event.preventDefault();
    })
};

characterSelection();




$(function() {


    $("#continueGame").on("click", function(event) {
        hideWelcome();
        $("#userInfo").removeClass("hidden");
        $("#userInfo").addClass("fadeInUp animated")
    });

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