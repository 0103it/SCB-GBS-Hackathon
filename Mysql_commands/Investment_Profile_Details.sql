CREATE TABLE `investment_profile_details` (
    `dream_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `investment_profile_id` int(11) NOT NULL,
    `dream_amount` int(11) NOT NULL,
    PRIMARY KEY (`dream_id`),
    FOREIGN KEY (investment_profile_id) REFERENCES investment_profile(id)
);