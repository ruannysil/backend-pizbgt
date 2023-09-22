import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import prismaClient from '../../prisma';

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('User/Password incorrect');
    }

    // preciso verificar se a senha que ele mandou esta correta.
    const passwordHash = await compare(password, user.password);

    if (!passwordHash) {
      throw new Error('User/Password incorrect');
    }

    // Se deu tudo certo vamos gera um token para usuairo
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      },
    );

    return { id: user.id, name: user.name, email: user.email, token: token };
  }
}

export { AuthUserService };
