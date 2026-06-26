import { validateExpenseData } from "../../utils/helpers.js";

export const expensesMiddleware = {
  checkDeletePermission(req, res, next) {
    const secretHeader = req.headers["secret"];
    if (secretHeader !== "random123") {
      return res.status(401).json({
        error: "თქვენ არ გაქვთ წაშლის უფლება",
      });
    }
    next();
  },

  validateCreateFields(req, res, next) {
    const { category, price } = req.body;

    if (category === undefined || price === undefined) {
      return res.status(400).json({
        error: "გთხოვთ შეავსოთ ყველა აუცილებელი ველი",
      });
    }

    req.validatedPrice = Number(price);
    next();
  },
};
