const asyncHandler = (func) => (req, res, next) => {
  try {
    func(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { asyncHandler };
