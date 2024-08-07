const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    profileImage: {
        type: String,
        default: "/images/C:\Users\payal\OneDrive\Desktop\newonetoonechat\public\photo-1494790108377-be9c29b29330.avif"
    },
    socketId: String
})

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);

