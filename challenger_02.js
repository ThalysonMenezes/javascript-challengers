
// Algoritmo que reverte strings
// sem utilizar funções nativas do Javascript

function FirstReverse(str) { 

    // Adiciona cada elemento da string em uma lista
    var str_list = [];
    for (let l of str) str_list.push(l);

    // Adiciona em uma nova lista os elementos na ordem inversa
    var reverse_str = [];
    for (let i = 1; i <= str_list.length; i++) reverse_str.push(str_list[str_list.length - i]);

    // Concatena os elementos
    var new_str = '';
    for (let i = 0; i < reverse_str.length; i ++) new_str += reverse_str[i];

    // Linha de código utilizando funções nativas do Javascript
    // return str.split('').reverse().join('');

    return new_str;

  }
     
console.log(FirstReverse(" Oi Thalyson"));
console.log();
console.log(FirstReverse("Está funcionando!"));