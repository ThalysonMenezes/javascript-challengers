function range(...nums){

    function arrayClear(lista){
        for (let i = lista.length; i > 0; i--) lista.pop();
    }
    // primeiro passo: apenas um parâmetro ( ex: range(5) )
    if(nums[1] == null && nums[2] == null && nums[0] != null) {
        if(nums[0] === 0) console.log(nums);
        else {
            let aux = nums[0];
            nums.pop();
            for (let add = 1; add <= aux; add++) nums.push(add);
            console.log(nums);
        }
    // segundo passo: dois parâmetros ( ex: range(6,11) )
    }else if(nums[2] == null && nums[0] != null){
        let init = nums[0];
        let end = nums[1];

        if(nums[0] < nums[1]){
            arrayClear(nums);
            for (let add = init; add <= end; add++) nums.push(add);
            console.log(nums);
        } else{
            arrayClear(nums);
            for (let add = init; add >= end; add--) nums.push(add);
            console.log(nums);
        }
    // terceiro passo: três parâmetros ( ex: range(6,11,1) )
    }else if(nums[2] != null && nums[3] == null){
        let init = nums[0];
        let end = nums[1];
        let cont = nums[2];

        if(nums[0] < nums[1]){
            arrayClear(nums);
            for (let add = init; add <= end; add += cont) nums.push(add);
            console.log(nums);
        } else{
            arrayClear(nums);
            for (let add = init; add >= end; add -= cont) nums.push(add);
            console.log(nums);
        }

    }else{
        console.log();
        console.log('Função sem parâmetros ou com parâmetros a mais!');
        console.log();
    }
}

//      Chamando a função
//      Função   -->   Saída

range(8); // range(8) --> [1, 2, 3, 4, 5, 6, 7, 8]

range(4,10); // range(4,10) --> [4, 5, 6, 7, 8, 9, 10]

range(11,5) // range(11,5) --> [11, 10, 9, 8, 7, 6, 5]

range(2, -2) // range(2, -2) --> [2, 1, 0, -1, -2]

range(10, 2, 2) // range(10, 2, 2) --> [10, 8, 6, 4, 2]

range(-3, 7, 2) // range(-3, 7, -2) --> [-3, -1, 1, 3, 5, 7]