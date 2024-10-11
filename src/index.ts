import CryptoJS from 'crypto-js';

export const encryptString = (
  string: string,
  password: string | Uint8Array
): Promise<string> => {
  return Promise.resolve(
    CryptoJS.AES.encrypt(string, password as string).toString()
  );
};

export const decryptString = (
  encryptedString: string,
  password: string | Uint8Array
): Promise<string> => {
  return Promise.resolve(
    CryptoJS.AES.decrypt(encryptedString, password as string).toString(
      CryptoJS.enc.Utf8
    )
  );
};
