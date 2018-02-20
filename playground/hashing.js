const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

const hashedPassword = '$2a$10$/YGOa6f6KHSNEIHj3dR9UugTCsls7LgL5XQItRcFk6MenGEpxBWGu';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
