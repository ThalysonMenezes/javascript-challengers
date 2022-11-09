// Algoritmo que recebe um input de uma sequência binária
// e retorna o valor em Hexadecimal

function main() {

  const seq = "0101111010110110";
  const hex = binaryToHex(seq);
  console.log("Binário:     ", seq );
  console.log("Hexadecimal: ", hex);

};

const binaryToHex = value => {
  const string_list = value.split("");  
  while(string_list.length % 4 !== 0) string_list.unshift("0");
  const str_binary = string_list.join("");
  
  let arr = [];
  let aux_arr = [];
  for(let i = 1; i <= str_binary.length; i++) {
    aux_arr.push(str_binary[i-1]);

    if (i !== 0 && i % 4 === 0) {
      arr.push(aux_arr.join(""));
      aux_arr = [];
    }
  };

  return hex = arr.reduce( (acc, cur) => {
    return acc + bin(cur)
  }, "");

}

const bin = value => {
  const revert = value.split("").reverse().join("");
  let resul = 0;
  for (let i = value.length; i > 0; i--){
    resul += Number(revert[i-1])*(2**(i-1))
  }

  return resul > 9 ? valueHex(String(resul)) : String(resul);
}

const valueHex = value => {
  const hex = {
    "10": "A",
    "11": "B",
    "12": "C",
    "13": "D",
    "14": "E",
    "15": "F",
  }

  return hex[value];
}

main();