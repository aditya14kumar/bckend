const asyncHandler = (requestHandler) => {
  (res, res, next) => {
    Promise.resolve(requestHandler).catch((err) => next(err));
  };
};

export { asyncHandler };
