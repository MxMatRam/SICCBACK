const mongoose = require('mongoose');
//https://www.codelabsdash.com/lessons/backend/node/Authentication_Part_1
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide Name'],
        minlength: 3,
        maxlength: 50,
    },

    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Please provide a passowrd'],
        minlength: 6,
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },

    verificationToken: String,
    isVerified: {
        type: Boolean,
        default: false,
    },

    verified: Date,
})

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createToken = function () {
    return JsonWebTokenError.sign(
        {
            userId: this._id, name: this.name, role: this.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
    );
};

userSchema.methods.comparePassword = async function (incomingPassword) {
    const isMatch = await bcrypt.compare(incomingPassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', UserSchema);