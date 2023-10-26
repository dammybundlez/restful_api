const recordService = require('../services/recordService');

const getOneRecord = (req, res) => {
    const {
      params: { workoutId },
    } = req;
    if (!workoutId) {
      res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
    }
    try{
      const record = recordService.getOneRecord(workoutId);
      res.send({ status: "OK", data: record });
    }catch(error){
      res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };

  module.exports = {getOneRecord}