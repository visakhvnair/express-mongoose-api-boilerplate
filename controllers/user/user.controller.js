const User = require('../../models/user.model');
const bcrypt = require('bcrypt');



/**
 * function to get current user details from database
 * @param{req} - HTTP request argument
 * @param{res} - HTTP response argument
 *
 **/
exports.get = async (req, res) => {

	let email = req.user.email
	let user = await User.findOne({ email });

	if (!user ) {
		res.status(401).json({ message: "No user details found" })
	} else {
		user.passwordHash = undefined
		res.status(200).json(user)
	}

}

/**
 * function to return saple 200 OK with sample json response
 * @param{req} - HTTP request argument
 * @param{res} - HTTP response argument
 *
 **/
exports.checkRole =( req,res )  =>{
	res.status(200).json({message: "You are allowed to access this controller"})
}
