export const appSettings = {
  ajaxTimeout: 300000,
  userInfo: 'angular-user_info',
  credentialsKey: 'angular-user_token',
  appTitle: 'Angular Management System',
  cryptoJSKey: 'ASDFG12345678@123ce4a9d9c',
  credentialsRememberKey: 'angular-user_crt_info',
  RegExp: {
    alphabetWithSpace: /^[A-Z a-z]+$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    address: /^[a-zA-Z0-9\s,.'-]{3,}$/,
    phoneNo: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    alphabet: /^[A-Za-z]+$/,
    numeric: /^[0-9]*$/,
    alphaNumeric: /^[a-zA-Z0-9]+$/,
  },
  charString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
};
