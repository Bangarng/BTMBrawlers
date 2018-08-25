-- DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE users_db;

use users_db;


CREATE TABLE userInfo 
(
id INT NOT NULL AUTO_INCREMENT,
userName VARCHAR(15) NOT NULL,
pass VARCHAR(15) NOT NULL,
charName VARCHAR(20) NOT NULL,
attack DECIMAL(10,2) NULL,
defense DECIMAL(10,2) NULL,
intellect DECIMAL(10,2) NULL,
bossOne boolean DEFAULT false,
bossTwo boolean DEFAULT false,
bossThree boolean DEFAULT false,
Primary Key (id)


INSERT INTO userInfo (userName, pass, charName, attack, defense, intellect, bossOne, bossTwo, bossThree) VALUES ('Smarcus4','sam12345','Sidekick', 15, 2, 10, false, false, false);



);
