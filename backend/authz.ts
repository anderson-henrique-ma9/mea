import { Request, Response } from "express";

import * as jwt from "jsonwebtoken";
import { runInThisContext } from "vm";

export const handleAuthorization = (req, resp, next) => {
  const token = extractToken(req);

  if (!token) {
    resp.setHeader("WWW-Authenticate", 'Bearer token_type="JWT"');
    resp.status(401).json({ message: "Você precisa se autenticar." });
  } else {
      jwt.verify(token, 'meat-api-password', (error, decoded) => {
          if (decoded) {
            next()
          } else {
              resp.send(403).json({message: "Acesso não autorizado."})
          }
      })
  }
};


function extractToken(req: Request): string {
    let token = undefined
    
    if(req.headers && req.headers.authorization) {
        // Authorization: Bearer ZZZ.ZZZ.ZZZ

        const parts: string[] = req.headers.authorization.split(' ')

        if(parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1]
        }
    }

    return token
}