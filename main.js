const addition = (num1, num2) => {
    const sum = num1 + num2
    return sum
}

const double = (num) => {
    const product = num * 2
    return product
}

const addAnswer = addition(4, 14)
// console.log(addAnswer)

const doubleAnswer = double(addAnswer)

console.log(doubleAnswer)






// 1. A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.
// 2. A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.
// 3. In the adding function, add the values of the two parameters and return the result
// 4. In the multiplication function, multiply the value of the single parameter by 2 and return the result.

// After the functions are defined, invoke them in the correct order.

// 1. Invoke the adding function, provide two values as arguments, and the store what gets returned into a variable.
// 2. Then invoke the multiplication function and provide the variable from the previous step as the argument. Store the result into a variable.
// 3. Use console.log() to output the end result of the multiplication function.
// As an example, if you pass 4 and 14 to the first function, then the final output should be 56.