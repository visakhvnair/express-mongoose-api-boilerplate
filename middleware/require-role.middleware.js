const httpError = require('http-errors');

/**
 * middleware to the check whether the autheticated users can access the route by roles
 * This is achieved by specifying the allowed roles as array in the router middleware .Then requesters roles will auomatically got from req.user 
 * @param{allowedRoles} - This is the parameter to specify the allowed roles .This will be @string value "*" or @array of roles 
 * NOTE: if @param allowedRoles is "*", then the route will allow  users with any role
 **/

module.exports = function requireRole(allowedRoles) {

  return (req, res, next) => {


    if (allowedRoles == "*") {
      return next();
    } else {
      if (!req.user || !allowedRoles) {
        const err = new httpError(401);
        return next(err);
      } else {
        let foundRole = allowedRoles.some(r => req.user.roles.includes(r))

        if (allowedRoles && !foundRole) {
          const err = new httpError(401);
          return next(err);
        } else {
          return next();
        }
      }
    }
  }
}