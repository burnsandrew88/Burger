USE afq158vi7o15ux0n;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    burger_name VARCHAR (255),
    devoured BOOLEAN DEFAULT false
);