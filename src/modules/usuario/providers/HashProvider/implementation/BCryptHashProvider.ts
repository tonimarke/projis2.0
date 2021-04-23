import { hash, compare } from 'bcryptjs';

import IHashProvider from '../model/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const hashed = await hash(payload, 10);

    return hashed;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const passwordMatched = await compare(payload, hashed);

    return passwordMatched;
  }
}

export default BCryptHashProvider;
