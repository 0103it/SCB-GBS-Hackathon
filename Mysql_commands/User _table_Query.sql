CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `age` int(3) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

INSERT INTO users (name, email, password, age, mobile)
VALUES('Radha', 'rds@gmail.com', MD5('radha123'), 25, '9876782563');

SELECT * FROM users;