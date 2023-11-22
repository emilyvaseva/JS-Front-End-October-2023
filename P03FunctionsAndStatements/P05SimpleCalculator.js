function calculate(num1, num2, operator) {
    const calculator = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    }
        const fun = calculator[operator];
    
        if (!fun) {
            return 0;
        }
    
        return calculator[operator](num1, num2);
    }
        
    const result = calculate (5, 5,'multiply')
    console.log(result);