const Prediction = require("../models/prediction.model");
const catchAsync = require("../utils/catchAsync");

exports.predictionCreate = catchAsync(async (req, res, next) => {
  const { date, money } = req.body

  const prediction = await Prediction.create({
    date,
    money
  })

  res.status(200).json({
    status: "success",
    prediction
  })
});

exports.predictionfindAll = catchAsync(async (req, res, next) => {
  const prediction = await Prediction.findAll({
    where: {
      status: "active",
    }
  })

  res.status(200).json({
    status: "success",
    prediction
  })
});