import { Request, Response } from "Express";
import { User, users } from "./users";

import * as jwt from "jsonwebtoken";

export const handleAuth = (req: Request, resp: Response) => {
  const user: User = req.body;
  if (isValid(user)) {
    const dbUser = users[user.email];
    const token = jwt.sign(
      {
        sub: dbUser.email,
        iss: "meat-api"
      },
      "meat-api-password"
    );
    resp.json({
      name: dbUser.name,
      email: dbUser.email,
      accessToken: token
    });
  } else {
    resp.status(403).json({
      message: "Dados inválidos."
    });
  }
};

function isValid(user): boolean {
  if (!user) {
    return false;
  }
  const dbUser = users[user.email];
  return dbUser !== undefined && dbUser.matches(user);
}
