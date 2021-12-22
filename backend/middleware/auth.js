const User = require('../module/user');
const alertError = (err) => {
    let errors = { name: '', email: '', password: '' }
    console.log('err message', err.message);
    console.log('err code', err.code);
    if (err.message === 'incorrect email') {
        errors.email = 'This email not found';
    }
    if (err.message === 'incorrect pwd') {
        errors.password = 'The password is incorrect';
    }
    if (err.code === 11000) {
        errors.email = 'This email already registered';
        return errors;
    }
    if (err.message.includes('user validation failed')) {

        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}
module.exports.signupUser = async (req, res) => {
    const { name, email, state, city } = req.body;
    try {
        const user = await User.create({ name, email, state, city });
        res.status(201).json({ user });
    } catch (error) {
        let errors = alertError(error);
        res.status(400).json({ errors });
    }

}

module.exports.userData = (req, res, next) => {
    User.find({}).then(data => res.json(data))



}
