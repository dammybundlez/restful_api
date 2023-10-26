const Record = require('../database/Record')

const getOneRecord = (workoutId) => {
    try {
      const record = Record.getOneRecord(workoutId);
      return record;     
    } catch (error) {
      throw error;
    }
  };

module.exports = {getOneRecord};