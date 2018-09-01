DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

use users_db;


CREATE TABLE userInfo 
(
id INT NOT NULL auto_increment,
userName VARCHAR(15) NOT NULL,
pass VARCHAR(15) NOT NULL,
charName VARCHAR(20) NOT NULL,
attack DECIMAL(10,2) NULL,
defense DECIMAL(10,2) NULL,
intellect DECIMAL(10,2) NULL,
itemOne VARCHAR(50) NULL,
itemTwo VARCHAR(50) NULL,
itemThree VARCHAR(50) NULL,
bossOne boolean DEFAULT false,
bossTwo boolean DEFAULT false,
bossThree boolean DEFAULT false,
Primary Key (id)

);

CREATE TABLE items
(
itemID INT NOT NULL AUTO_INCREMENT,
itemName VARCHAR(15) NOT NULL,
attack DECIMAL(10,2) NULL,
defense DECIMAL(10,2) NULL,
intellect DECIMAL(10,2) NULL,
lvlUnlock boolean DEFAULT false,
charName VARCHAR(20) NOT NULL,
Primary Key (itemID),
FOREIGN KEY (charName) REFERENCES userInfo(charName)

);

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("PowerSword", 10, 0, 2, false, 'Sidekick');

INSERT INTO items (itemName, attack, defense, intellect, lvlUnlock, charName) 
VALUES("PowerSword", 10, 0, 2, false, 'Hero');

INSERT INTO userInfo (userName, pass, charName, attack, defense, intellect, bossOne, bossTwo, bossThree) 
VALUES ('Smarcus4','sam12345','Sidekick', 15, 2, 10, false, false, false);


INSERT INTO userInfo (userName, pass, charName, attack, defense, intellect, bossOne, bossTwo, bossThree) 
VALUES ('Smarcus4','sam12345','Hero', 15, 2, 10, false, false, false);
