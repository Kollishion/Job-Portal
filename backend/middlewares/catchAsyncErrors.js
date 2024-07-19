export const catchAsyncError = (userFunction) => {
  return (req, res, next) => {
    Promise.resolve(userFunction(req, res, next)).catch(next);
  };
};
