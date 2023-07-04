const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/error.controller')

//Routes
const predictionRouter = require('./routers/prediction.routes')
// const repairRoutes = require('./routers/repairs.router')

const app = express();

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rutas
app.use("/api/v1/prediction", predictionRouter);
// app.use("/api/v1/repairs", repairRoutes);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  )
})

app.use(globalErrorHandler)

module.exports = app;