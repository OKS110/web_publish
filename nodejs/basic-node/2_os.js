const os = require('os');  // require 내장객체는 Nodejs에서 제공하는 내장 모듈을 호출, import 동일

console.log(os.type()); //Windows_NT
console.log(os.hostname()); //DESKTOP-L2T6EDQ
console.log(os.homedir()); //C:\Users\tj
// console.log(os.cpus());
console.log(os.cpus().length); //12
console.log(os.freemem()); //18763038720
console.log(os.totalmem()); //25709264896
