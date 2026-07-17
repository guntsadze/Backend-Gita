import { NextFunction, Request, Response } from "express";

type Role = "admin";

export default function roleMiddleware(roles: Role) {
  return function (req: Request, res: Response, next: NextFunction) {
    const role = req.headers["role"] as Role;

    if (!roles.includes(role)) {
      return res.status(403).json({ message: "PERMITION_DENIED" });
    }
    next();
  };
}
