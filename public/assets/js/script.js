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

//this is the static characters
var Hero = new characterMaker("Hero", 20, 20, 15);
var Sidekick = new characterMaker("Sidekick", 15, 20, 13);
var Shadowtaken = new characterMaker("Shadowtaken", 10, 15, 25);
var Mothman = new characterMaker("Mothman", 30, 30, 5);
console.log(Sidekick);

//this will hold the variable that are pushed in here to be called by the submit onclic
var charArr = ["holder"];
console.log(charArr);

var selectHero = $("#heroCharacter");
var selectSidekick = $("#sidekickCharacter");
var selectShadowtaken = $("#shadowtakenCharacter");
var selectMothman = $("#mothmanCharacter");

//this takes a onclick, grabs the variable of the character and pushes it to the charArr
selectHero.on("click", function (event) {
    event.preventDefault();
    charArr.splice(0,1,Hero);
    console.log(charArr);
});
selectSidekick.on("click", function (event) {
    event.preventDefault();
    charArr.splice(0,1,Sidekick);
    console.log(charArr);
});
selectShadowtaken.on("click", function (event) {
    event.preventDefault();
    charArr.splice(0,1,Shadowtaken);
    console.log(charArr);
});
selectMothman.on("click", function (event) {
    event.preventDefault();
    charArr.splice(0,1,Mothman);
    console.log(charArr);
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