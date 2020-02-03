# Express Mongoose API Boilerplate
A simple and minimal boilerplate for Express.js with mongoose.  
### Pre-requisites
* `git` - [Installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) .  
* `Node JS` - [Download page](https://nodejs.org/en/download/) .  
* `npm` - comes with node |OR|   `yarn`  - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* `MongoDB` - [Download page](https://www.mongodb.com/download-center/community) . 
### Usage
Clone the repository 
```sh
$ git clone https://github.com/visakhvnair/express-mongoose-api-boilerplate
```
Based on environment, add the configurations like below
##### Development Configuration
- Run ```npm i```  to install npm packages
- Copy the contents of ```.env.dev``` to ```.env``` for development mode
    Eg: For linux like OS you can use the below command
    ```sh
    $ cp .env.dev .env
    ```
- Run `npm start` to start the server
**NOTE:** if necessary, hange the values of  environment variables 
##### Production Configuraion 
- Copy the contents of `.env.prod` to `.env` for production 
**NOTE:** if necessary,change the values of  environment variables 
### Directory Structure

```
.
├── config
│   ├── constants.config.js
│   ├── express.config.js
│   ├── mongoose.config.js
│   ├── passport.config.js
│   └── vars.config.js
├── controllers
│   └── user
│       ├── user-auth.controller.js
│       └── user.controller.js
├── docs
│   └── swagger.json
├── middleware
│   └── require-role.middleware.js
├── models
│   └── user.model.js
├── routes
│   ├── index.route.js
│   ├── user-auth.route.js
│   └── user.route.js
├── .env
├── .env.dev
├── .env.prod
├── index.js
├── package.json
└── README.md
```

### Features
- The constants used in the application can add in `constants.config.js`
- The express configurations are in `express.config.js`
- The environmental variable access from `vars.config.js`.
- Any application configuration variables can add in `vars.config.js`.
- The user authentication is implimented.
- The user model is defined in `user.model.js` 
- For authentication, the JWT token is used.
- For authorization `passport.js` is integrated, configured in `passport.config.js`  
- The implemented user creation api will create a user with default role `user` 
- The middleware `requireRole` in `require-role.middleware.js` can be used for access control based on the role of the authenticated user.  
- The routes which need authorization is  made as a separate file
- The new routes/controllers/models can be added in the routes/controllers/models folder as a sperate file for the easing of maintaining code.
   For example, if your application has `Product`  then you can add new route `product.route.js` and new controller  `product.controller.js` and model `product.model.js`
- Swagger(openapi 2 aka swagger) is user for api documention.The details of apis can be represented as JSON in `docs.sawagger.json`      
- Go to route  `api/docs` to view api documentaion.      
