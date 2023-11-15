function solve(arr, number) {
    const newArr =[];
    for (let i = 0; i < arr.length; i++) {
        if(i % number === 0){
            newArr.push(arr[i])
        }
    }
    
    return newArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));