const Password = require('../modules/Password');
const generatePassword = require('../utils/passwordGenerator');

// Generate and save password
exports.generateAndSavePassword = async (req, res) => {
    const length = parseInt(req.body.length, 10);
    const password = generatePassword(length);

    try {
        const newPassword = new Password({ password });
        await newPassword.save();
        res.render('index', { result: password });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving password');
    }
};

