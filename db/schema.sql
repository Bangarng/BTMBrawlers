DROP DATABASE IF EXISTS users_db;
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
attBoost DECIMAL(10,2) NULL,
defBoost DECIMAL (10,2) NULL,
intBoost DECIMAL (10,2) NULL,
bossOne boolean DEFAULT false,
bossTwo boolean DEFAULT false,
bossThree boolean DEFAULT false,
Primary Key (id)

);

CREATE TABLE items
(
id INT NOT NULL AUTO_INCREMENT,
itemName VARCHAR(15) NOT NULL,
attack DECIMAL(10,2) NULL,
defense DECIMAL(10,2) NULL,
intellect DECIMAL(10,2) NULL,
lvlUnlock boolean DEFAULT false,
Primary Key (id)

);



-- SAM'S SCHEMA

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
itemName VARCHAR(50) NOT NULL,
attack DECIMAL(10,2) NULL,
defense DECIMAL(10,2) NULL,
intellect DECIMAL(10,2) NULL,
lvlUnlock boolean DEFAULT false,
charName VARCHAR(20) NOT NULL,
id INT null,
Primary Key (itemID),
FOREIGN KEY (id) REFERENCES userInfo(id)

);
