



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





function heroItems(itemhere){
    $("#items").empty();
    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {
     

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Hero" && !data[i].lvlUnlock){

                console.log(data[i]);
                if(data[i].itemName === "Tech Goggles"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/hero/Tech-Goggles.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                    
                }
                if(data[i].itemName === "Cape of Strength"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/hero/Cape-of-Strength.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }    
                if(data[i].itemName === "Passive: Brawler Might"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/hero/Brawler-Might.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }
                  
            }
        } 
     
       
    });

    // $("#heroButtons").empty();
    // $("#heroButtons").show();
    // $("#sidekickButtons").hide();
    // $("#shadowtakenButtons").hide();
    // $("#mothmanButtons").hide();

}




function sidekickItems(itemhere){
    $("#items").empty();

    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Sidekick" && !data[i].lvlUnlock){
                console.log(data[i]);

                if(data[i].itemName === "Drainer Helm"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/sidekick/Drainer-Helm.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }
                if(data[i].itemName === "Dual Grapple Guns"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/sidekick/Dual-Grapple-Guns.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }    
                if(data[i].itemName === "Passive: Steady Aim"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/sidekick/Steady-Aim.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }
            }
        }

    });
    $('#sidekickButtons').empty();
    $("#heroButtons").hide();
    $("#sidekickButtons").show();
    $("#shadowtakenButtons").hide();
    $("#mothmanButtons").hide();

        
    
   

}

function shadowtakenItems(itemhere){

    $("#items").empty();

    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Shadowtaken" && !data[i].lvlUnlock){
            console.log(data[i]);
                
                if(data[i].itemName === "Black Belt"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/shadowtaken/black-belt.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }
                if(data[i].itemName === "Melee Prowness"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/shadowtaken/melee-prowness.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
                }    
                if(data[i].itemName === "Crouching Tiger Hidden Chimera"){
                    $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/shadowtaken/crouching-tiger-hidden-chimera.png'/></tr></td>");

                    // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
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

function mothmanItems(itemhere){

    $("#items").empty();

    $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {

        for(i=0; i<data.length; i++){
            if(data[i].charName==="Mothman" && !data[i].lvlUnlock){
            console.log(data[i]);
           
            if(data[i].itemName === "Insect Wings"){
                $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName +"' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/mothman/Insect-Wings.png'/></tr></td>");

                // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
            }
            if(data[i].itemName === "Moth Vision Goggles"){
                $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/mothman/Moth-Vision-Goggles.png'/></tr></td>");
         

                // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
            }    
            if(data[i].itemName === "Wingstorm Wind Strike"){
                $("#items").append("<tr><td class='itemBox'><p class='pressStart'>" + data[i].itemName + "</p><img img data-attribute='" + data[i].itemName + "' id='itembuttons' class='img img-responsive flash' src='../public/assets/images/items/mothman/Wingstorm-Wind-Strike.png'/></tr></td>");
                // itemArr.splice(0,1,data[i].itemName,data[i].attack,data[i].defense, data[i].intellect);
            }   
        }
    } 
    

        


        
    });

    

}



/****************************************
 END FUNCTIONS FOR CREATING ITEM BUTTONS
*****************************************/

//this takes a onclick, grabs the variable of the character and pushes it to the charArr
selectHero.on("click", function (event) {
    
   

   heroItems();

    charArr.splice(0,1,Hero);
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);


    console.log(charArr);
    event.preventDefault();
});

selectSidekick.on("click", function (event) {



    
    sidekickItems();
    
    charArr.splice(0,1,Sidekick);
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);
    

    console.log(charArr);
    event.preventDefault();
});
selectShadowtaken.on("click", function (event) {

   shadowtakenItems();
    charArr.splice(0,1,Shadowtaken);

    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);

    console.log(charArr);
    event.preventDefault();
});
selectMothman.on("click", function (event) {

    
    mothmanItems();

    
     
    charArr.splice(0,1,Mothman);
    $("#thisname").empty();
    $("#thisname").append(charArr[0].charName);
 

  
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
var modal2 = $('.item-sel-modal');

// Get the button that opens the modal
var btn = $("#heroCharacter, #sidekickCharacter, #shadowtakenCharacter, #mothmanCharacter");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

var btn2 = ("#items")

btn2.onclick = function(){
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


// function heroHover(x){
//     $.ajax("/itemAPI", {
//         type: "GET",
//     }).then( function(data){

//         for(i=0; i<data[i].length; i++){

//             if(data[i].itemName===x){

//                 console.log("this is a test for items");
//                 console.log(data[i].itemName, data[i].attack);
//                 itemArr.push(data[i].attack, data[i].defense);
//             }

//         }


     
//     });


// }




$(function() {
//for clicking on items and updating them into the database
    $('#items').on('click','#itembuttons', function(){
        event.preventDefault();
        $("#thisitemname").empty();
   

     
        var item1 = $(this).attr("data-attribute");
        itemArr.splice(0,1 ,item1)
         $.ajax("/itemAPI", {
        type: "GET",
    }).then( function(data) {
        for(var i=0; i<data.length; i++){

            if(itemArr[0]===data[i].itemName){
                itemArr=["holder"];
                itemArr.splice(0,1,data[i].itemName ,data[i].attack, data[i].defense, data[i].intellect);
                console.log(itemArr);
                $("#thisitemname").append("Item Name: "+itemArr[0] +"<br>"+ "Attack Power: " +itemArr[1] +"<br>"+"Defense Health: " + itemArr[2] +"<br>"+"Intellect: " + itemArr[3]);
                
               

            }
        }
        // charArr[0].attack+=parseInt(itemArr[1]);
        // charArr[0].defense+=parseInt(itemArr[2]);
   
        // charArr[0].intellect+=parseInt(itemArr[3]);
   
    })

    console.log(charArr);
    



     
         
});


  //CODE FOR ON HOVER TO SHOW STATS HERE




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
        var user1 = $("#userNameInput").val().trim();
        var pass1 = $("#passwordInput").val().trim();


        $.ajax("/characterAPI", {
            type: "GET",
        }).then(function(data) {
          
       
           if(user1!==""){ 
            for(var i=0; i<data.length; i++){
                if(data[i].userName===user1){
                    alert("THAT USER NAME IS TAKEN YA FILTHY CASUAL");
                  
                   
                }
                
            }
            itemSelection();
            hideWelcome();
            break;
        }else
            
             if((user1==="" || pass1==="")){

                alert("error, please enter a valid user name and password, no name= no brawling");
        
                itemSelection();
                hideWelcome();
             
        
                
            }
             else {    
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
            attack: charArr[0].attack + parseInt(itemArr[1]),
            defense: charArr[0].defense + parseInt(itemArr[2]),
            intellect: charArr[0].intellect+parseInt(itemArr[3]),
            itemOne: itemArr[0],
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




