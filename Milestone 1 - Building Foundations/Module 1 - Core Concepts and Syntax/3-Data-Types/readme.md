# Data Types

- JavaScript is a dynamically typed language, which means that variables can hold values of any data type without any need for explicit type declaration. JavaScript has several built-in data types, which can be categorized into two main categories: primitive data types and reference data types.
- বাংলা : জাভাস্ক্রিপ্ট একটি ডায়নামিক্যালি টাইপড ল্যাংগুয়েজ, মানে জাভাস্ক্রিপ্টে একটি ভ্যারিয়েবেলের যখন ভ্যালু স্টোর করা হয় তখন সেই ভ্যালু কি `টাইপ/ধরনের` ভ্যালু সেটা আলাদাভাবে `টাইপ/ধরন` ডিক্লেয়ার করে দিতে হয় না । জাভাস্ক্রিপ্টের নিজস্ব কিছু ডেটা টাইপস আছে যেগুলোকে দুইভাগে ভাগ করা যেতে পারে : `১. প্রিমিটিভ ডেটা টাইপ। ২. নন-প্রিমিটিভ/রেফারেন্স ডেটা টাইপ।`

  - ## Primitive Data Types:

    Primitive data types are the most basic data types used to represent simple values.

    - There are six primitive data types in JavaScript:

    1. Number: Represents both integer and floating-point numbers, such as `42` or `3.14`.
    2. String: Represents a sequence of characters enclosed within single (`''`) or double (`""`) quotes, such as `'hello'` or `"123"`.
    3. Boolean: Represents a logical entity, either `true` or `false`.
    4. Undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value yet.
    5. Null: Represents an intentional absence of any value.
    6. Symbol (added in ECMAScript 6): Represents a unique identifier. Symbols are often used as property keys in objects to avoid name collisions.

  - ## বাংলা : প্রিমিটিভ ডেটা টাইপঃ

    - এই ধরনের ডেটাগুলোতে ভ্যালু সরাসরি স্টোর করা থাকে। জাভাস্ক্রিপ্টে আসলে সবই অবজেক্ট শুধুমাত্র এই প্রিমিটিভ ডেটা টাইপগুলো বাদে।

  - ## Non-Primitive/Reference Data Types:

    Non-primitive data types, also known as reference types, are not directly stored in variables but are instead stored as references to memory locations where the actual data is stored.

        - Objects: Used to store collections of data as key-value pairs.
        - Arrays: Used to store collections of data in a list-like structure.
        - Functions: Used to define reusable blocks of code.

    - When you manipulate a non-primitive type (objects, arrays, functions, etc.) in JavaScript, you're working with a reference to the data rather than the data itself. This means that when you pass a non-primitive type as an argument to a function or assign it to a variable, you're actually passing or assigning a reference to the original data in memory, rather than creating a copy of the entire data structure.
    - This behavior can lead to some nuances in JavaScript programming, especially when dealing with mutability and passing objects as function arguments. When you pass an object as an argument to a function, you're passing a reference to that object. This means that any modifications made to the object within the function will affect the original object outside the function as well, since they both point to the same location in memory.

  - ## বাংলা : নন-প্রিমিটিভ ডেটা টাইপঃ

    - এই টাইপের ডেটাগুলোতে ভ্যালু সরাসরি স্টোর করা থাকেনা কিন্তু এর পরিবর্তে ভ্যালুর রেফারেন্স হিসেবে মেমোরিতে সেইভ থাকে।

    - যখন জাভাস্ক্রিপ্টে একটি নন-প্রিমিটিভ টাইপ `(objects, arrays, functions, ইত্যাদি)` ম্যানিপুলেট করা হয়, তখন আসলে আমরা `ডেটার` পরিবর্তে `ডেটার রেফারেন্স` নিয়ে কাজ করে থাকি। এর মানে হলো, যখন একটি `নন-প্রিমিটিভ টাইপকে` একটি `ফাংশনে` একটি `আর্গুমেন্ট` হিসাবে পাস করানো হয় অথবা এটিকে একটি ভেরিয়েবলের মদ্ধে বরাদ্দ করানো হয়, তখন আমরা সম্পূর্ণ ডেটা স্ট্রাকচারের একটি কপি তৈরি করার পরিবর্তে মেমোরিতে অরিজিনাল ডেটার একটি রেফারেন্স পাস বা বরাদ্দ করি।

    - জাভাস্ক্রিপ্ট প্রোগ্রামিংয়ে যখন একটি ফাংশনে অবজেক্টকে আর্গুমেন্ট হিসাবে পাস করা হয়, তখন আসলে আমরা রেফারেন্সকে সেই অবজেক্টে পাস করি। এর মানে হলো, ফাংশনের মধ্যে অবজেক্টে করা যেকোনো পরিবর্তন ফাংশনের বাইরের যে অরিজিনাল অবজেক্ট আছে সেটাকেও প্রভাবিত/পরিবর্তন করবে।

### Example

```javascript
function modifyObject(obj) {
  obj.property = "modified";
}

let myObject = { property: "original" };
modifyObject(myObject);
console.log(myObject.property); // Output: "modified"
```
