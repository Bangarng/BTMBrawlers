var arr = ["holder"];
var arrBoss = ["holder"];
var characterMaker = function(charName, attack, defense, intellect) {
    this.charName =  charName;
    this.attack =  attack;
    this.defense = defense;
    this.intellect =  intellect;
};

$("#submitPassword").on("click", function(event) {
    event.preventDefault();
    // var pleasework = {
    //     password: $("#passwordYo").val().trim()
    // };
    // console.log(pleasework);
    var password = $("#passwordYo").val().trim()

    $.ajax("/characterAPI", {
        type: "GET",
        // data: pleasework
    }).then(function(data) {
        for(i=0; i<data.length; i++){
            if(data[i].pass===password){
                var char = data[i];
                arr.splice(0,1,char);
            }
        }
    })
    $("#passwordform").addClass("fadeOutUp animated hidden");
    $("#pagename").removeClass("hidden")
    $("#startbossone").removeClass("hidden")
   



    $("#gamePage").removeClass("hidden")
    // $("#startbossone").removeClass("hidden")
    // $("#startbosstwo").removeClass("hidden")

    // $("#startbossthree").removeClass("hidden")
});

$("#startbossone").on("click", function(event) {
    event.preventDefault();
    $("#bossonescreen").removeClass("hidden fadeOutDown");
    $("#bossonescreen").addClass("fadeInUp animated");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Big Thug", 3, 60, 10);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    console.log(arrBoss[0]);
    game1()
});

$("#startbosstwo").on("click", function(event) {
    event.preventDefault();
    $("#winlosediv").addClass("hidden");
    $("#bosstwoscreen").removeClass("hidden fadeOutDown");
    $("#bosstwoscreen").addClass("fadeInUp animated");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Gunslinger", 10, 80, 15);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    $(".playerattackstat").text("ON YOUR MARK!");
    $(".bossattackstat").text("THEY GOT YOU IN THIER SIGHTS!!!!");
    console.log(arrBoss[0]);
    game2()
});

$("#startbossthree").on("click", function(event) {
    event.preventDefault();
    $("#winlosediv").addClass("hidden");
    $("#bossthreescreen").removeClass("hidden fadeOutDown");
    $("#bossthreescreen").addClass("fadeInUp animated");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Giant Robot", 15, 100, 20);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    $(".playerattackstat").text("INSTALL MCCAFFEE ON THIS BITCH!!");
    $(".bossattackstat").text("IT'S PENETRATING YOUR BACK FIREWALL");
    console.log(arrBoss[0]);
    game3()
});

var playerDefense = ["holder"];
var bossDefense = ["holder"];
var game1 = function() {
    playerDefense.splice(0,1,arr[0].defense);
    bossDefense.splice(0,1,arrBoss[0].defense);

    console.log(playerDefense);
    console.log(bossDefense);
    console.log(arr)
    console.log(arrBoss)
    

    $(".playerattack").text("\nATK: " + arr[0].attack);
    $(".playerdefense").text("\nDEF: " + playerDefense[0]);
    $(".playerintellect").text("\nINT: " + arr[0].intellect);

    $(".bossattack").text("\nATK: " + arrBoss[0].attack);
    $(".bossdefense").text("\nDEF: " + bossDefense[0]);
    $(".bossintellect").text("\nINT: " + arrBoss[0].intellect);



    var playerAttack = function() {
        var attack = arr[0].attack;
        var intellect = arr[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".playerattackstat").text("ATTACK!");
            $(".playerattackstat").addClass("tada animated");
            var damage = (bossDefense[0] - attack)
            bossDefense.splice(0, 1, damage);
            console.log("player attacked" + "\nboss hp:" + bossDefense);
            $(".bossdefense").text("\nDEF: " + bossDefense[0]);
            ifBossDead();
            bossAttack();
            return
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            console.log("player missed");
            bossAttack();
            return
        }
        
    }

    var bossAttack = function() {
        var attack = arrBoss[0].attack;
        var intellect = arrBoss[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".bossattackstat").text("YOU'VE TAKEN A BLOW!");
            var damage = (playerDefense[0] - attack);
            playerDefense.splice(0, 1, damage);
            console.log("boss attacked" + "\nplayer hp:" + playerDefense);
            $(".playerdefense").text("\nDEF: " + playerDefense[0]);
            ifYouDead();
        }
        else {
            $(".bossattackstat").text("YOU'VE DODGED!");
            console.log("boss missed");
        }
    };

    $("#playerButtonb1").on("click", function(event) {
        event.preventDefault();
        playerAttack();
        console.log("B1Button");
    });
    // $("#playerButtonb2").on("click", function(event) {
    //     event.preventDefault();
    //     console.log(playerDefense)
    //     console.log(bossDefense);
    //     playerAttack();
    //     console.log("B2Button");
    // });
    // $("#playerButtonb3").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B3Button");
    // });

    console.log("Player life: " + playerDefense);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Boss has been defeated! Rejoice " + arr[0].userName);
            playerDefense = ["whatPlayer"];
            bossDefense = ["whatBoss"];
            console.log(playerDefense);
            console.log(bossDefense);
            $("#startbosstwo").removeClass("hidden")
            return console.log("fight end and you won");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Your life " + arr[0].userName + " will be forgotten");
            $("#winlosetext").append("<br><br><button><a href = '/gamepage' style='text-decoration:none'>PICK YOURSELF UP CHUMP</a></button>")
            console.log(playerDefense);
            console.log(bossDefense);
            return console.log("fight end and you loss");
        }
    }
};
var game2 = function() {
    playerDefense.splice(0,1,arr[0].defense);
    bossDefense.splice(0,1,arrBoss[0].defense);

    console.log(playerDefense);
    console.log(bossDefense);
    console.log(arr)
    console.log(arrBoss)
    

    $(".playerattack").text("\nATK: " + arr[0].attack);
    $(".playerdefense").text("\nDEF: " + playerDefense[0]);
    $(".playerintellect").text("\nINT: " + arr[0].intellect);

    $(".bossattack").text("\nATK: " + arrBoss[0].attack);
    $(".bossdefense").text("\nDEF: " + bossDefense[0]);
    $(".bossintellect").text("\nINT: " + arrBoss[0].intellect);



    var playerAttack = function() {
        var attack = arr[0].attack;
        var intellect = arr[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".playerattackstat").text("ATTACK!");
            $(".playerattackstat").addClass("tada animated");
            var damage = (bossDefense[0] - attack)
            bossDefense.splice(0, 1, damage);
            console.log("player attacked" + "\nboss hp:" + bossDefense);
            $(".bossdefense").text("\nDEF: " + bossDefense[0]);
            ifBossDead();
            bossAttack();
            return
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            console.log("player missed");
            bossAttack();
            return
        }
        
    }

    var bossAttack = function() {
        var attack = arrBoss[0].attack;
        var intellect = arrBoss[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".bossattackstat").text("YOU'VE TAKEN A BLOW!");
            var damage = (playerDefense[0] - attack);
            playerDefense.splice(0, 1, damage);
            console.log("boss attacked" + "\nplayer hp:" + playerDefense);
            $(".playerdefense").text("\nDEF: " + playerDefense[0]);
            ifYouDead();
        }
        else {
            $(".bossattackstat").text("YOU'VE DODGED!");
            console.log("boss missed");
        }
    };

    // $("#playerButtonb1").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B1Button");
    // });
    $("#playerButtonb2").on("click", function(event) {
        event.preventDefault();
        console.log(playerDefense)
        console.log(bossDefense);
        playerAttack();
        console.log("B2Button");
    });
    // $("#playerButtonb3").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B3Button");
    // });

    console.log("Player life: " + playerDefense);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Boss has been defeated! Rejoice " + arr[0].userName);
            playerDefense = ["whatPlayer"];
            bossDefense = ["whatBoss"];
            console.log(playerDefense);
            console.log(bossDefense);
            $("#startbossthree").removeClass("hidden")
            return console.log("fight end and you won");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Your life " + arr[0].userName + " will be forgotten");
            $("#winlosetext").append("<br><br><button><a href = '/gamepage' style='text-decoration:none'>PICK YOURSELF UP CHUMP</a></button>")
            console.log(playerDefense);
            console.log(bossDefense);
            return console.log("fight end and you loss");
        }
    }
};
var game3 = function() {
    playerDefense.splice(0,1,arr[0].defense);
    bossDefense.splice(0,1,arrBoss[0].defense);

    console.log(playerDefense);
    console.log(bossDefense);
    console.log(arr)
    console.log(arrBoss)
    

    $(".playerattack").text("\nATK: " + arr[0].attack);
    $(".playerdefense").text("\nDEF: " + playerDefense[0]);
    $(".playerintellect").text("\nINT: " + arr[0].intellect);

    $(".bossattack").text("\nATK: " + arrBoss[0].attack);
    $(".bossdefense").text("\nDEF: " + bossDefense[0]);
    $(".bossintellect").text("\nINT: " + arrBoss[0].intellect);



    var playerAttack = function() {
        var attack = arr[0].attack;
        var intellect = arr[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".playerattackstat").text("ATTACK!");
            $(".playerattackstat").addClass("tada animated");
            var damage = (bossDefense[0] - attack)
            bossDefense.splice(0, 1, damage);
            console.log("player attacked" + "\nboss hp:" + bossDefense);
            $(".bossdefense").text("\nDEF: " + bossDefense[0]);
            ifBossDead();
            bossAttack();
            return
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            console.log("player missed");
            bossAttack();
            return
        }
        
    }

    var bossAttack = function() {
        var attack = arrBoss[0].attack;
        var intellect = arrBoss[0].intellect;

        if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
            $(".bossattackstat").text("YOU'VE TAKEN A BLOW!");
            var damage = (playerDefense[0] - attack);
            playerDefense.splice(0, 1, damage);
            console.log("boss attacked" + "\nplayer hp:" + playerDefense);
            $(".playerdefense").text("\nDEF: " + playerDefense[0]);
            ifYouDead();
        }
        else {
            $(".bossattackstat").text("YOU'VE DODGED!");
            console.log("boss missed");
        }
    };

    // $("#playerButtonb1").on("click", function(event) {
    //     event.preventDefault();
    //     playerAttack();
    //     console.log("B1Button");
    // });
    // $("#playerButtonb2").on("click", function(event) {
    //     event.preventDefault();
    //     console.log(playerDefense)
    //     console.log(bossDefense);
    //     playerAttack();
    //     console.log("B2Button");
    // });
    $("#playerButtonb3").on("click", function(event) {
        event.preventDefault();
        playerAttack();
        console.log("B3Button");
    });

    console.log("Player life: " + playerDefense);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("YOU'VE SAVED THE CITY!");
            playerDefense = ["whatPlayer"];
            bossDefense = ["whatBoss"];
            console.log(playerDefense);
            console.log(bossDefense);
            // $("#startbosstwo").removeClass("hidden")
            return console.log("fight end and you won");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            hideAllBossDivs();
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Your life " + arr[0].userName + " will be forgotten");
            $("#winlosetext").append("<br><br><button><a href = '/gamepage' style='text-decoration:none'>PICK YOURSELF UP CHUMP</a></button>")

            console.log(playerDefense);
            console.log(bossDefense);
            return console.log("fight end and you loss");
        }
    }
};
var hideAllBossDivs = function () {
    $(".bossdiv").removeClass("fadeInUp");
    $(".bossdiv").addClass("fadeOutDown hidden");
};
