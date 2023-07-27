const models = require("../models/index");

// get - all response from response table
const getResponses = async (req, res) => {
  try {
    const response = await models.Response.findAll({
      include: [
        {
          model: models.Question_Option,
          include: [models.Question, models.Option],
        },
      ],
    });
    res.status(200).send(response);
  } catch (err) {
      throw new Error("Error in fetching responses",err);
  }
};


module.exports = {
  getResponses,
};
