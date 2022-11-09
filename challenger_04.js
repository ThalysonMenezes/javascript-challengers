// Algoritmo que incrementa uma sequência alfanumérica composta de
// caractere + número de forma completamente escalável para aplicações
// envolvendo ID's, métodos de contagem dentre outros. 

// EX ---------------
// -> AZZZZZZ99999
// -> BAAAAAA00000
// ------------------

function main() {
  // ÁREA PARA TESTES

  const value = `ABCDFFFZZ999`;
  const result = newSequel(value);

  console.log("\n\n -------------------");
  console.log("Anterior :", value);
  console.log("Posterior:", result);
  console.log(" -------------------\n\n");
}

const numberSequel = (actualSequel, reset) => {
  if (reset) {
    // se resetou, apenas retorna a string refatorada
    return strRefact(actualSequel);
  } else {
    const occurrences = actualSequel.reduce((acc, item) => {
      if (item === "9") return acc.concat(1);
      else return acc.map(() => 0).concat(0);
    }, []);

    const firstInd = occurrences.indexOf(1);
    const resul = addUnity(actualSequel, firstInd);
    return resul;
  }
};

const addUnity = (arr, index) => {
  if (index === -1) {
    // Caso não há nenhuma mudança de casa númerica à frente, adiciona-se na unidade
    const number = Number(arr[arr.length - 1]);
    arr[arr.length - 1] = String(number + 1);
    return strRefact(arr);
  } else {
    const number = Number(arr[index - 1]);
    arr[index - 1] = String(number + 1);
    const reset = arr.map((value, ind) => {
      if (ind === index || ind > index) return (value = "0");
      else return value;
    });
    return strRefact(reset);
  }
};

const upperSequel = (actualSequel) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrUppercase = [...uppercase];

  const occurrences = actualSequel.reduce((acc, item) => {
    if (item === "Z") return acc.concat(1);
    else return acc.map(() => 0).concat(0);
  }, []);

  const firstInd = occurrences.indexOf(1);

  const resul = addLetterUnity(actualSequel, firstInd, arrUppercase);
  return resul;
};

const addLetterUnity = (arr, index, arrUppercase) => {
  if (index === -1) {
    // Caso não há nenhuma mudança de casa númerica à frente, adiciona-se na unidade
    const indice = arrUppercase.indexOf(arr[arr.length - 1]);
    arr[arr.length - 1] = arrUppercase[indice + 1];
    return strRefact(arr);
  } else if (index === 0) {
    const reset = arr.map(() => "A");
    const increment = ["A", ...reset];
    return strRefact(increment);
  } else {
    const indice = arrUppercase.indexOf(arr[index - 1]);
    arr[index - 1] = arrUppercase[indice + 1];
    const reset = arr.map((value, ind) => {
      if (ind === index || ind > index) return (value = "A");
      else return value;
    });
    return strRefact(reset);
  }
};

const strRefact = (list) => list.toString().replace(/,/g, "");

const newSequel = (actualSequel) => {
  const letterSequel = [...actualSequel.toUpperCase().replace(/(\d)/g, "")];
  const numSequel = [...actualSequel.replace(/(\D)/g, "")];

  const check = numSequel.every((item) => item === "9"); // Verifica se a sequência númerica está no limite
  if (check) {
    const resetNumberSequel = numSequel.map(() => "0"); // Zera toda a sequência númerica (reseta)
    const newUpperSequel = upperSequel(letterSequel); // incrementa a sequência de caracteres
    const newNumberSequel = numberSequel(resetNumberSequel, check); //
    return `${newUpperSequel}${newNumberSequel}`;
  } else {
    const newNumberSequel = numberSequel(numSequel, check);
    return `${strRefact(letterSequel)}${newNumberSequel}`;
  }
};

main();
