const { model } = require("../db");

module.exports = class UserDto {
    email;
    id;
    isActivated;
    role;
    isVerified;


    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated
        this.role = model.role
        this.isVerified = model.isVerified
    }
}

