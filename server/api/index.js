const express = require('express');

const { errorHandler } = require('../middleware');


// List all models here

const { User } = require('../models/user');


// List all controllers here

const users = require('../controllers/users');




const routersInit = config => {
  const router = express();
  //router.use(permissionHandler)


  // Define API Endpoints
  
  router.use('/user', users());
  


  // Catch all API Errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
