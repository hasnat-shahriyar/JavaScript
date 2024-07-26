let num1 = 5;
let num2 = num1;
// Output: 5
console.log(num1);
// Output: 5
console.log(num2);

num1 = 10;
// Output: 10
console.log(num1);
// Output: 5 -- Num2 still not changed! That's what happens when we're not using a pointer.
console.log(num2);

// Now let's use Pointers
let obj1 = {
    value: 10,
}
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj1.value = 20;
console.log(obj1);
console.log(obj2);
