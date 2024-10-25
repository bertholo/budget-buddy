const db = require('../../db/db');

exports.handler = async (event, context) => {
    try {
      await db();
  
      const message = "Database connected successfully";
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Error: ${error.message}`,
      };
    }
  };