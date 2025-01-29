import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";

const healthcheck = (req, res) => {
  try {
    return res
      .status(200)
      .json(new APIResponse(200, null, "Healthcheck passed"));
  } catch (error) {
    throw new APIError(500, "Error in healthcheck");
  }
};

export { healthcheck };
