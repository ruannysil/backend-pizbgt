import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // console.log('CHAMOU OS MIDDLEWARES');

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
    // console.log(sub);

    //Recupera o id do token e colocar dentro de uma variavel user_id dentro do req.
    req.user_id = sub;
    return next();
  } catch (err) {
    // console.log(err, "Não autorizado");
    return res.status(401).end();

  }

}
