// Function 1: Double
function double(x){
    return (x*2);
}

/*
// Tests for Function 1
console.log(double(0));
console.log(double(3));
console.log(double(-2));
console.log(double(-5));
*/

// Function 2: Square
function square(x){
    return (x*x);
}

/*
// Tests for Function 2
console.log(square(0));     // 0
console.log(square (3));    // 9
console.log(square(-2));    // 4
console.log(square(-5));    // 25
*/


// Function 3: 
function isEven(x){
    if (x % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

/*
// Tests for Function 3
console.log(isEven(0));     // true
console.log(isEven (3));    // false
console.log(isEven(-2));    // true
console.log(isEven(-5));    // false
*/

// Function 4:
function isOdd(x){
    if (x % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

/*
// Tests for Function 4
console.log(isOdd(0));     // false
console.log(isOdd(3));    // true
console.log(isOdd(-2));    // false
console.log(isOdd(-5));    // true
*/

// Function 5:
function multiply(x, y){
    return (x*y);
}

/*
// Tests for Function 5
console.log(multiply(-5,2));        // -10
console.log(multiply(-5.5, 2));     // -11
console.log(multiply(-5.5, 2.1));   // -11.55
*/

// Function 6:
function divide(x, y){
    return (x/y);
}

/*
// Tests for Function 6
console.log(divide(6, 3));        // 2
console.log(divide(-6.6, 2));     // -3.3
console.log(divide(6.6, 2.0));   // 3.3
*/
