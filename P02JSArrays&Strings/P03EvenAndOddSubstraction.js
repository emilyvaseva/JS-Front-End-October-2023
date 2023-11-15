function evenAndOddSubstraction(arr){
    let sunOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;

    for(let index = 0; index < arr.length; index++){
        const currentNumber = Number(arr[index]);
        const isEvenNumber = currentNumber%2 == 0;

        if (isEvenNumber){
            sunOfEvenNumbers += currentNumber;
        }else{
            sumOfOddNumbers += currentNumber;
        }
    }

    console.log(sunOfEvenNumbers-sumOfOddNumbers);
}

evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);