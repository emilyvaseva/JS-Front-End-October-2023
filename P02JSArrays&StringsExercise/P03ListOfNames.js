function sortedNameList(arr) {
    arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }  
}

sortedNameList(["John", "Bob", "Christina", "Ema"]);