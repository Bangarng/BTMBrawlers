

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
// var heroWep1 = new itemMaker("Tech Glasses", 0, 15, 4);
// var heroWep2 = new itemMaker("Cape of Strength", 10, 0, 0);

// //drainer helm - takes intellect from enemy and increases sidekicks intellect, grapple guns increases speed, increasing his defense because he is harder to hit
// var sidekickWep1 = new itemMaker("Drainer Helm", 0, 0, 20);
// var sidekickWep2 = new itemMaker("Dual Grapple Guns", 0, 15, 0);

// //black belt - increases all stats in attack dmg, defense, and hit(int), passive skill of melee strength
// var shadowtakenWep1 = new itemMaker("Black Belt", 10, 10, 10);
// var shadowtakenWep2 = new itemMaker("Increased Melee Prowness - Passive", 15, 0, 0);

// //Moth wings - gives flight and increases defense, Moth vision - anticipates enemy attacks, granting mothman hit chance and defense
// var mothmanWep1 = new itemMaker("Moth Wings", 0, 30,0 );
// var mothmanWep2 = new itemMaker("Moth Vision Goggles", 0, 10, 10);


//this is the static characters


//stats total 60
var Hero = new characterMaker("Hero", 20, 20, 20); //full stack brawler
var Sidekick = new characterMaker("Sidekick", 15, 20, 25); //duel grapple guns, intellect, reach
var Shadowtaken = new characterMaker("Shadowtaken", 30, 15, 15); //triple black belt with grapple gun
var Mothman = new characterMaker("Mothman", 10, 40, 10); //can fly, speaks gibberish, here for the free spread


//this will hold the variable that are pushed in here to be called by the submit onclic
var charArr = ["holder"];
var itemArr = ["holder"];
// var heroArr = [heroWep1, heroWep2];
// var sidekickArr = [sidekickWep1, sidekickWep2];
// var shadowtakenArr = [shadowtakenWep1, shadowtakenWep2];
// var mothmanArr = [mothmanWep1, mothmanWep2];

console.log(charArr);

var selectHero = $("#heroCharacter");
var selectSidekick = $("#sidekickCharacter");
var selectShadowtaken = $("#shadowtakenCharacter");
var selectMothman = $("#mothmanCharacter");
// console.log(heroWep1);


/************************************************************************
 These functions below will be placed in each on click to load the items
*************************************************************************/


function heroItems(){
    $("#items").empty();
    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Hero" && !data[i].lvlUnlock){
            console.log(data[i]);
       
           var button =$("<td><button id='itembuttons'>" + data[i].itemName +"</button></td>");
         
            $("#items").append(button);
            console.log(button);
           
          
            }
        } 
       
    });

    // $("#heroButtons").empty();
    // $("#heroButtons").show();
    // $("#sidekickButtons").hide();
    // $("#shadowtakenButtons").hide();
    // $("#mothmanButtons").hide();

}

function sidekickItems(){
    $("#items").empty();

    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Sidekick" && !data[i].lvlUnlock){

            console.log(data[i]);
            var button =$("<td><button id='itembuttons'>" + data[i].itemName +"</button></td>");
         
            $("#items").append(button);
            }
        }

    });
    $('#sidekickButtons').empty();
    $("#heroButtons").hide();
    $("#sidekickButtons").show();
    $("#shadowtakenButtons").hide();
    $("#mothmanButtons").hide();

        
    
    // $('#sidekickButtons').empty();
    // $("#heroButtons").hide();
    // $("#sidekickButtons").show();
    // $("#shadowtakenButtons").hide();
    // $("#mothmanButtons").hide();

}

function shadowtakenItems(){

    $("#items").empty();

    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Shadowtaken"){
            console.log(data[i]);
                
                if(data[i].itemName === "Black Belt"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/shadowtaken/black-belt.png'/></tr></td>");
                }
                if(data[i].itemName === "Melee Prowness"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/shadowtaken/melee-prowness.png'/></tr></td>");
                }    
                if(data[i].itemName === "Crouching Tiger Hidden Chimera"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/shadowtaken/crouching-tiger-hidden-chimera.png'/></tr></td>");
                }                  
            }
        }
    });

    // $("#shadowtakenButtons").empty();
    // $("#heroButtons").hide();
    // $("#sidekickButtons").hide();
    // $("#shadowtakenButtons").show();
    // $("#mothmanButtons").hide();
}

function mothmanItems(){

    $("#items").empty();

    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Mothman" && !data[i].lvlUnlock){
            console.log(data[i]);
           
            var button =$("<td><button id='itembuttons'>" + data[i].itemName +"</button></td>");
         
            $("#items").append(button);
            }
        }


        
    });

    // $("#mothmanButtons").empty();
    // $("#heroButtons").hide();
    // $("#sidekickButtons").hide();
    // $("#shadowtakenButtons").hide();
    // $("#mothmanButtons").show();

}



/****************************************
 END FUNCTIONS FOR CREATING ITEM BUTTONS
*****************************************/

//this takes a onclick, grabs the variable of the character and pushes it to the charArr
selectHero.on("click", function (event) {
    
    // var attackBoost = heroWep1.itmAttack + heroWep2.itmAttack;
    // var defBoost = heroWep1.itmDefense + heroWep2.itmDefense;
    // var intBoost = heroWep1.itmIntellect + heroWep2.itmIntellect;

   heroItems();

    charArr.splice(0,1,Hero);
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);

 
    // Hero.attack += attackBoost;
    // Hero.defense +=defBoost; 
    // Hero.intellect += intBoost;
    console.log(charArr);
    event.preventDefault();
});

selectSidekick.on("click", function (event) {
    // var attackBoost = sidekickWep1.itmAttack + sidekickWep2.itmAttack;
    // var defBoost = sidekickWep1.itmDefense + sidekickWep2.itmDefense;
    // var intBoost = sidekickWep1.itmIntellect + sidekickWep2.itmIntellect;


    
    sidekickItems();
    
    charArr.splice(0,1,Sidekick);
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);
    // Sidekick.attack += attackBoost;
    // Sidekick.defense +=defBoost; 
    // Sidekick.intellect += intBoost;

    console.log(charArr);
    event.preventDefault();
});
selectShadowtaken.on("click", function (event) {
    // var attackBoost = shadowtakenWep1.itmAttack + shadowtakenWep2.itmAttack;
    // var defBoost = shadowtakenWep1.itmDefense + shadowtakenWep2.itmDefense;
    // var intBoost = shadowtakenWep1.itmIntellect + shadowtakenWep2.itmIntellect;

   shadowtakenItems();
    charArr.splice(0,1,Shadowtaken);
    // Shadowtaken.attack += attackBoost;
    // Shadowtaken.defense +=defBoost; 
    // Shadowtaken.intellect += intBoost;
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);

    console.log(charArr);
    event.preventDefault();
});
selectMothman.on("click", function (event) {
    // var attackBoost = mothmanWep1.itmAttack + mothmanWep2.itmAttack;
    // var defBoost = mothmanWep1.itmDefense + mothmanWep2.itmDefense;
    // var intBoost = mothmanWep1.itmIntellect + mothmanWep2.itmIntellect;
    
    mothmanItems();

    
     
    charArr.splice(0,1,Mothman);
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);

    // Mothman.attack += attackBoost;
    // Mothman.defense +=defBoost; 
    // Mothman.intellect += intBoost;
    console.log(charArr);
    event.preventDefault();
})


// Show, hide the character stats when hovering
$("#heroCharacter").hover(function() {
    $(".hero-DIV").removeClass("hidden");
    $('.blankStats').addClass('hidden');
});

$("#sidekickCharacter").hover(function() {
    $(".sidekick-DIV").removeClass("hidden");
    $('.blankStats').addClass('hidden');
});

$("#shadowtakenCharacter").hover(function() {
    $(".shadowtaken-DIV").removeClass("hidden");
    $('.blankStats').addClass('hidden');
});

$("#mothmanCharacter").hover(function() {
    $(".mothman-DIV").removeClass("hidden");
    $('.blankStats').addClass('hidden');
});

$("#heroCharacter, #sidekickCharacter, #shadowtakenCharacter, #mothmanCharacter").on('mouseleave', function() {
    $('.blankStats').removeClass('hidden');
    $(".hero-DIV").addClass("hidden");
    $(".sidekick-DIV").addClass("hidden");
    $(".shadowtaken-DIV").addClass("hidden");
    $(".mothman-DIV").addClass("hidden");
 });

//ModalBox for CharSelect
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })

// Get the modal
var modal = $('.char-sel-modal');

// Get the button that opens the modal
var btn = $("#heroCharacter, #sidekickCharacter, #shadowtakenCharacter, #mothmanCharacter");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

//lets a button be active for when we input data?

// var header = document.getElementById("myID");
// var btns = header.getElementsByClassName("btns");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
$(".heroCharacter").on("mouseenter", function() {
    $(".hero-DIV").show();
}).on("mouseleave", function() {
    $(".hero-DIV").hide();
});


// Code for the start up screen.
var hideWelcome = function() {
    $("#welcomeScreen").addClass("hidden");
}

var hideCredentials = function() {
    $("#enterCredentials").addClass("hidden");
}


var itemSelection = function(){
    $("#itemSelection").addClass("hidden");
}

var hideCharSelect = function() {
    $("#createUser").addClass("hidden");
}

$(function() {
    //continue game
    $("#continueGame").on("click", function(event) {
        event.preventDefault();
        itemSelection();
        hideWelcome();
        $("#userInfo").removeClass("hidden");
        $("#userInfo").addClass("fadeInUp animated");
    });
    //create a new game
    $("#newGame").on("click", function(event) {
        event.preventDefault();
        hideWelcome();
        itemSelection();

        $("#enterCredentials").removeClass("hidden");
        $("#enterCredentials").addClass("fadeInUp animated");
    });
    //Load the Character Select
    $("#submitCredentials").on("click", function(event) {
        event.preventDefault();
        hideCredentials();
        itemSelection();

        $("#createUser").removeClass("hidden");
        $("#createUser").addClass("fadeInUp animated");
        var themeSong = $(".themeMusic");
        var charSelSong = document.createElement("audio");
        var site = window.location;
        charSelSong.src = site + "/public/assets/music/BTM Character Select.mp3";
        charSelSong.autoPlay = false;
        charSelSong.preLoad = true;
        charSelSong.controls = false;
        charSelSong.loop = true;
        charSelSong.duration = 0;
        if (charSelSong.duration > 0 && !myAudio.paused) {
            themeSong.stop();
            console.log("Character Select Song is playing.");
        } else {
            charSelSong.play();
            charSelSong.duration = 1;
        }

    });
     //back to User Credentials
     $("#backToUser").on("click", function(event) {
        event.preventDefault();
        hideWelcome();
        itemSelection();
        hideCharSelect();
        $("#enterCredentials").removeClass("hidden");
        $("#enterCredentials").addClass("fadeInUp animated");
    });   

    $("#charCreation").on("click",function(){
        hideWelcome();
        itemSelection();
        hideCredentials();
        $("#createUser").removeClass("hidden");
        $("#createUser").addClass("fadeInUp animated");
    })

    $("#itemScreen").on("click", function(){
        event.preventDefault();
        hideWelcome();
        hideCredentials();
        hideCharSelect();
        $("#itemSelection").removeClass("hidden");
        $("#itemSelection").addClass("fadeInUp animated");



    })
    //Homepage, restart app
    $(".backHome").on("click", function(){
        event.preventDefault();
        window.location.href = ("/");
    });

    $(".continuethefight").on("click", function() {
        event.preventDefault();
        window.location.href = ("/gamepage");
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
            itemOne: 'none',
            itemTwo: 'none',
            itemThree: 'none',
            bossOne: false,
            bossTwo: false, 
            bossThree: false
        };


       
        //here is the call from the controller
        $.ajax("/createuser", {
            type: "POST",
            data: userdata
        }).then( function(data) {
            console.log(data);
            window.location = "/gamepage";
        })
    });


        
});

