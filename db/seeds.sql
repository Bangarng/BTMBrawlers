/*seed for userInfo*/
INSERT INTO userInfo (userName, pass, charName, attack, defense, intellect, bossOne, bossTwo, bossThree) 
VALUES ('Smarcus4','sam12345','Sidekick', 15, 2, 10, false, false, false);

/*seed for item*/
INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock) 
VALUES("PowerSword", 10, 0, 2, false);

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock) 
VALUES("PowerFist", 30, 0, 1, false);

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock) 
VALUES("SnipeyGun", 20, 0, 10, false);



/*SEED INFORMATION FOR ITEMS_DB*/

/*********************************
Hero Starter Weapon Choices
*********************************/
INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Tech Goggles", 0, 0, 10, false,"Hero");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Cape of Strength", 8, 0, 0, false,"Hero");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Passive: Brawler Might", , 15, 0, false,"Hero");


/*********************************
Sidekick Starter Weapon Choices
*********************************/
INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Sidekick) 
VALUES("Drainer Helm", 0, 15, 0, false,"SideKick");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Dual Grapple Guns", 10, 0, 0, false,"Sidekick");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Passive: Steady Aim", 0, 0, 15, false,"Sidekick");

/*********************************
Shadowtaken Starter Weapon Choices
*********************************/
INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Sidekick) 
VALUES("Drainer Helm", 0, 15, 0, false,"Shadowtaken");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Dual Grapple Guns", 10, 0, 0, false,"Shadowtaken");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, Hero) 
VALUES("Passive: Steady Aim", 0, 0, 15, false,"Shadowtaken");



/*********************************
Mothman Starter Weapon Choices
*********************************/