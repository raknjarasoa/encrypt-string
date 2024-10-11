import { decryptString, encryptString } from '../src';

describe('hack', () => {
  it('encryptString', async () => {
    const text = 'Hello world';
    const password = '123456';
    const crypted = await encryptString(text, password);
    expect(crypted).not.toEqual(text);
    expect(await decryptString(crypted, password)).toBe(text);
  });
});
