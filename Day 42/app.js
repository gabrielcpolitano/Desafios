// for(início; cindição; step) {
//   ações
// }

// for(let numero = 1; numero <= 10; numero++) {
//   console.log(numero);
// }

// let numero = 1;
// for(;numero <= 10; numero++) {
//   console.log(numero);
// }

// let numero = 1;
// for(;numero <= 10;) {
//   console.log(numero++);
// }´

// for(let numero = 1; numero <= 10; numero++) {
//   if(numero == 5) continue;
//   console.log(numero);
// }

// for(let numero = 1; numero <= 10; numero++) {
//   console.log(numero);
//   if(numero == 5) break;
// }

// for(let valor1 = 1; valor1 <= 4; valor1++){
//   for(let valor2 = 1; valor2 <= 3; valor2++){
//     console.log(`${valor1} X ${valor2} = ${valor1 * valor2}`);
//   }
// }

ciclo: for(let valor1 = 1; valor1 <= 4; valor1++){
  for(let valor2 = 1; valor2 <= 3; valor2++){
    if(valor1 * valor2 == 6) break ciclo;
    console.log(`${valor1} X ${valor2} = ${valor1 * valor2}`);
  }
}

