import * as CryptoJS from "crypto-js"
import { appSettings } from "@app-core/config";

let key: string = appSettings.cryptoJSKey;

export const cryptoJSHelper = {

  encrypt: (data: any) => {
    return CryptoJS.AES.encrypt(data, key).toString();
  },

  decrypt: (ciphertext: any) => {
    let bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}