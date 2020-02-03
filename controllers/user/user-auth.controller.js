const User = require('../../models/user.model');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/vars.config')

const userSchema = Joi.object({
	fullName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required(),
})


/**
 * function to generate the JWT Token
 * @param{req} - HTTP request argument
 * @param{res} - HTTP response argument
 *
 **/
exports.authenticate = async (req, res) => {

	try {
		let password = req.body.password
		let email = req.body.email
		let user = await User.findOne({ email });

		if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
			res.send(401).json({ message: "Incorrect login credentials" })
		} else {

			user.passwordHash = undefined;

			const payload = JSON.stringify(user);
			res.status(200).json({ token: jwt.sign(payload, config.jwtSecretKey) })
		}

	} catch (error) {
		res.send(401).json({ message: "Authenication failed" })
	}

}

/**
 * function to create the user
 * @param{req} - HTTP request argument
 * @param{res} - HTTP response argument
 **/
exports.create = async (req, res) => {

	try {
		user = req.body
		user = await Joi.validate(user, userSchema, { abortEarly: false });

		user.roles = ['user']
		user.passwordHash = bcrypt.hashSync(user.password, 10);
		delete user.password;

		user = await new User(user).save();

		user.passwordHash = undefined;

		res.status(200).send(user)

	} catch (error) {

		if (error.isJoi) {
			error.message = error.details.map(e => e.message).join("; ");
			res.status(400).json({ message: error.message });
		} else {
			res.status(400).send({ message: "User creation failed" })
		}

	}

}