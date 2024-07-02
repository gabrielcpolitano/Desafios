// SWITCH

/* 
É uma estrutura que permite substituir múltiplos IFs.
*/ 


// switch (valor) {
//   case 1:
//     // CÓDIGO
//     break;

//   default:
//     // CÓDIGO
//     break;
// }

// let valor = 30;

// switch (valor) {
//   case 1:
//     console.log("Valor é 1");
//     break;
    
//   case 2:
//     console.log("Valor é 2");
//     break;

//   case 3:
//     console.log("Valor é 3");
//     break;
    
//   default:
//     console.log("Valor não é 1, 2 ou 3");
//     break;
// }

// let valor = 3;
// switch (valor) {
//   case > 2:
//     console.log("Valor é maior que 2");
//     break;
// }

// let valor = 1;
// switch(valor) {
//   case 1:
//     console.log("Valor 1");
//     break;

//   case "1":
//     console.log("Texto 1");
//     break;
// }

let valor = 1;
switch (valor) {
  case 1:
  case 2:
  case 3:
    console.log("Valor é 1, 2 ou 3");
    break;
    
  default: 
    console.log("Valor não é 1, 2 ou 3");
    break;
}
