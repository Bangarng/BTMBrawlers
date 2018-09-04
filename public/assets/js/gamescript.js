var arr = [];

$("#submitPassword").on("click", function(event) {
    event.preventDefault();
    var pleasework = {
        password: $("#passwordYo").val().trim()
    };
    console.log(pleasework);

    $.ajax("/gamepage", {
        type: "GET",
        data: pleasework
    }).then(function(data) {
        // console.log(data);
        // window.location = "/gamepage"
    })
});



//************************* */
// THIS IS MY GAME TEMPLATE //
//************************* */


// var characterMaker = function(charName, attack, defense, intellect) {
//     this.charName =  charName;
//     this.attack =  attack;
//     this.defense = defense;
//     this.intellect =  intellect;
// };

// var player = new characterMaker("Hero", 20, 20, 20);
// var boss = new characterMaker("Big Thug", 3, 60, 50);

// var playerDefense = [(player.defense + 10)];
// var bossDefense = [boss.defense];

// $("#playerattack").text("\nATK: " + player.attack);
// $("#playerdefense").text("\nDEF: " + playerDefense[0]);
// $("#playerintellect").text("\nINT: " + player.intellect);

// $("#bossattack").text("\nATK: " + boss.attack);
// $("#bossdefense").text("\nDEF: " + bossDefense[0]);
// $("#bossintellect").text("\nINT: " + boss.intellect);



// var playerAttack = function() {
//     var attack = player.attack;
//     var intellect = player.intellect;

//     if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
//         $("#playerattackstat").text("ATTACK!");
//         var damage = (bossDefense[0] - attack)
//         bossDefense.splice(0, 1, damage);
//         console.log("player attacked" + "\nboss hp:" + bossDefense);
//         $("#bossdefense").text("\nDEF: " + bossDefense[0]);
//         ifBossDead();
//         bossAttack();
//     }
//     else {
//         $("#playerattackstat").text("MISSED!?");
//         console.log("player missed");
//         bossAttack();
//     }
// }

// var bossAttack = function() {
//     var attack = boss.attack;
//     var intellect = boss.intellect;

//     if ((Math.floor((Math.random() * 100) + 1)) <= intellect) {
//         $("#bossattackstat").text("YOU'VE TAKEN A BLOW!");
//         var damage = (playerDefense[0] - attack);
//         playerDefense.splice(0, 1, damage);
//         console.log("boss attacked" + "\nplayer hp:" + playerDefense);
//         $("#playerdefense").text("\nDEF: " + playerDefense[0]);
//         ifYouDead();
//     }
//     else {
//         $("#bossattackstat").text("YOU'VE DODGED!");
//         console.log("boss missed");
//     }
// };

// $("#playerButton").on("click", function() {
//     playerAttack();
// });

// console.log("Player life: " + playerDefense);
// console.log("Boss life: " + bossDefense);

// var ifBossDead = function() {
//     if (bossDefense[0] <= 0) {
//         document.write("THE BOSS IS DEFEATED!");
//     }
// }

// var ifYouDead = function() {
//     if (playerDefense[0] <= 0) {
//         document.write("...PLAYER DOWN...");
//     }
//     else if (playerDefense[0] <= 0 && bossDefense[0] <= 0) {
//         document.write("Your sacrifice shall not be forgotten");
//     }
// }