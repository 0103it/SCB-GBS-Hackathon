CREATE TABLE `user_profile` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `userId` int(11) NOT NULL,
    `loyalties_earned` int(10) NOT NULL,
    `current_corpus` int(10) NOT NULL,
    `required_corpus` int(10) NOT NULL,
    `investment_profile_id` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (investment_profile_id) REFERENCES investment_profile(id)
);