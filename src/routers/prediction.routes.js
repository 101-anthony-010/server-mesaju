const express = require('express');

const router = express.Router();

//Controller functions
const predictionController = require('./../controllers/prediction.controllers')


//Middleware functions
// const predictionMiddleware = require('./../middlewares/prediction.middleware')


//Rutas

router
  .route('/')
  .post(predictionController.predictionCreate)
  .get(predictionController.predictionfindAll)

module.exports = router;