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
console.log(Sidekick);

var charArr = ["holder"];
console.log(charArr);

var selectHero = $("#heroCharacter");
var selectSidekick = $("#sidekickCharacter");
var selectShadowtaken = $("#shadowtakenCharacter");
var selectMothman = $("#mothmanCharacter");

selectHero.on("click", function (event) {
    event.preventDefault();
    charArr.splice(0,1,Hero);
    console.log(charArr);
});
selectSidekick.on("click", function (event) {
    event.preventDefault();
    return charArr[1];
});
selectShadowtaken.on("click", function (event) {
    event.preventDefault();
    return charArr[2];
});
selectMothman.on("click", function (event) {
    event.preventDefault();
    return charArr[3];
})




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
            charName: charArr[0].charName,
            attack: charArr[0].attack,
            defense: charArr[0].defense,
            intellect: charArr[0].defense,
            bossOne: false,
            bossTwo: false, 
            bossThree: false
        };

        $.ajax("/createuser", {
            type: "POST",
            data: userdata
        }).then(
            function(data){
            console.log(data);
            // window.location = "/";
            }
        )

    });

});