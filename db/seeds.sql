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

/*********************************************
USERDB SEEDS
*********************************************/

INSERT INTO userInfo (userName, pass, charName, attack, defense, intellect, itemOne, itemTwo, itemThree, bossOne, bossTwo, bossThree) 
VALUES ('Smarcus4','sam12345','Sidekick', 15, 2, 10, 'none', 'none', 'none', false, false, false);

/*********************************************
ITEMSDB SEEDS
*********************************************/



INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Tech Goggles", 0, 0, 10, false,"Hero");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Cape of Strength", 8, 0, 0, false,"Hero");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Passive: Brawler Might", 0, 15, 0, false,"Hero");



INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Drainer Helm", 0, 15, 0, false,"Sidekick");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Dual Grapple Guns", 10, 0, 0, false,"Sidekick");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Passive: Steady Aim", 0, 0, 15, false,"Sidekick");



INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Black Belt", 10, 0, 0, false,"Shadowtaken");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Melee Prowness", 8, 0, 0, false,"Shadowtaken");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Crouching Tiger Hidden Chimera", 0, 10, 0, false,"Shadowtaken");



INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Insect Wings", 0, 15, 0, false,"Mothman");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Moth Vision Goggles", 0, 0, 15, false,"Mothman");

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("Wingstorm Wind Strike", 10, 0, 0, false,"Mothman");
