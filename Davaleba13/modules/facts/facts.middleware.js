export const factsMiddleware = {
  randomBlocker(req, res, next) {
    const shouldBlock = Math.random() < 0.5;

    if (shouldBlock) {
      return res.status(403).json({
        error: "წვდომა არ გაქვთ",
      });
    }

    next();
  },
};
