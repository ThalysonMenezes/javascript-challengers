// Algoritmo que converte número romano
// em inteiro

const symbol = (v) => {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return values[v];
};

function romanToInterger(str) {
  const dado = str.split("");

  return dado.reduce((acc, cur, index) => {
    if (symbol(cur) < symbol(dado[index + 1])) {
      return acc;
    } else {
      if (symbol(cur) > symbol(dado[index - 1])) {
        return acc + (symbol(cur) - symbol(dado[index - 1]));
      } else {
        return acc + symbol(cur);
      }
    }
  }, 0);
}

console.log(romanToInterger("MCMXCIV"));
