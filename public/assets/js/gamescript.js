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
    $("#startbossone").removeClass("hidden")
    $("#startbosstwo").removeClass("hidden")
    $("#startbossthree").removeClass("hidden")
});

$("#startbossone").on("click", function(event) {
    event.preventDefault();
    $("#bossonescreen").removeClass("hidden");
    $("#bossonescreen").addClass("fadeInUp animated");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Big Thug", 3, 60, 10);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    console.log(arrBoss[0]);
    game()
});

$("#startbosstwo").on("click", function(event) {
    event.preventDefault();
    $("#winlosediv").addClass("hidden");
    $("#bosstwoscreen").removeClass("hidden");
    $("#bosstwoscreen").addClass("fadeInUp animated");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Gunslinger", 10, 60, 15);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    console.log(arrBoss[0]);
    game()
});

$("#startbossthree").on("click", function(event) {
    event.preventDefault();
    $("#winlosediv").addClass("hidden");
    $("#bossthreescreen").removeClass("hidden");
    $("#bossthreescreen").addClass("fadeInUp animated");
    $(".charnamedisplay").text(arr[0].charName);
    $(".usernamedisplay").text(arr[0].userName);
    var boss = new characterMaker("Giant Robot", 15, 60, 20);
    arrBoss.splice(0,1,boss);
    $(".bossnamedisplay").text(arrBoss[0].charName);
    console.log(arrBoss[0]);
    game()
});

//************************* */
// THIS IS MY GAME TEMPLATE //
//************************* */
var game = function() {
    var playerDefense = [arr[0].defense];
    var bossDefense = [arrBoss[0].defense];

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
        }
        else {
            $(".playerattackstat").text("MISSED!?");
            $(".playerattackstat").addClass("flip animated");
            console.log("player missed");
            bossAttack();
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

    $("#playerButton").on("click", function() {
        playerAttack();
    });

    console.log("Player life: " + playerDefense);
    console.log("Boss life: " + bossDefense);

    var ifBossDead = function() {
        if (bossDefense[0] <= 0) {
            $("#bossonescreen").removeClass("fadeInUp");
            $("#bossonescreen").addClass("fadeOutDown hidden");
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Boss has been defeated!");
        }
    }

    var ifYouDead = function() {
        if (playerDefense[0] <= 0) {
            $("#bossonescreen").removeClass("fadeInUp");
            $("#bossonescreen").addClass("fadeOutDown hidden");
            $("#winlosediv").removeClass("hidden");
            $("#winlosediv").addClass("fadeInUp animated");
            $("#winlosetext").text("Your Loss will never be forgotten");
        }
    }

}