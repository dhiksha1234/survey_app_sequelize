const models = require("../models/index");

// get - all response
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
    return err;
  }
};

// post call for the responses
const createResponse = async (req, res) => {
  const responsesArray = req.body;

  try {
    for (const response of responsesArray) {
      const questionOption = await models.Question_Option.findOne({
        where: { questionId: response.questionId, optionId: response.optionId },
      });

      if (!questionOption) {
        continue;
      }

      await models.Response.create({
        questionOptionId: questionOption.questionOptionId,
        userId: response.userId,
      });
    }

    res.status(200).send(responsesArray);
  } catch (error) {
    return err;
  }
};

module.exports = {
  getResponses,
  createResponse,
};
