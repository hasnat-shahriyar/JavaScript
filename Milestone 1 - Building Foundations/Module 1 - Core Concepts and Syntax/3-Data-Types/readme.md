# Data Types

- JavaScript is a dynamically typed language, which means that variables can hold values of any data type without any need for explicit type declaration. JavaScript has several built-in data types, which can be categorized into two main categories: primitive data types and reference data types.
- বাংলা : জাভাস্ক্রিপ্ট একটি ডায়নামিক্যালি টাইপড ল্যাংগুয়েজ, মানে জাভাস্ক্রিপ্টে একটি ভ্যারিয়েবেলের যখন ভ্যালু স্টোর করা হয় তখন সেই ভ্যালু কি `টাইপ/ধরনের` ভ্যালু সেটা আলাদাভাবে `টাইপ/ধরন` ডিক্লেয়ার করে দিতে হয় না । জাভাস্ক্রিপ্টের নিজস্ব কিছু ডেটা টাইপস আছে যেগুলোকে দুইভাগে ভাগ করা যেতে পারে : `১. প্রিমিটিভ ডেটা টাইপ। ২. নন-প্রিমিটিভ/রেফারেন্স ডেটা টাইপ।`

  - Primitive Data Types:

    - Primitive data types are the most basic data types used to represent simple values.
    - There are six primitive data types in JavaScript:

    1. Number: Represents both integer and floating-point numbers, such as `42` or `3.14`.
    2. String: Represents a sequence of characters enclosed within single (`''`) or double (`""`) quotes, such as `'hello'` or `"123"`.
    3. Boolean: Represents a logical entity, either `true` or `false`.
    4. Undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value yet.
    5. Null: Represents an intentional absence of any value.
    6. Symbol (added in ECMAScript 6): Represents a unique identifier. Symbols are often used as property keys in objects to avoid name collisions.

  - বাংলা : প্রিমিটিভ ডেটা টাইপ

    - এই ধরনের ডেটাগুলোতে ভ্যালু সরাসরি স্টোর করা থাকে। জাভাস্ক্রিপ্টে আসলে সবই অবজেক্ট শুধুমাত্র এই প্রিমিটিভ ডেটা টাইপগুলো বাদে।

  - Non-Primitive/ Reference Data Types:
    - Non-primitive data types, also known as reference types, are data types that are not directly stored in the variable but instead are stored as references to memory locations where the actual data is stored.
    - When you manipulate a non-primitive type (objects, arrays, functions, etc.) in JavaScript, you're working with a reference to the data rather than the data itself. This means that when you pass a non-primitive type as an argument to a function or assign it to a variable, you're actually passing or assigning a reference to the original data in memory, rather than creating a copy of the entire data structure.
    - This behavior can lead to some nuances in JavaScript programming, especially when dealing with mutability and passing objects as function arguments. When you pass an object as an argument to a function, you're passing a reference to that object. This means that any modifications made to the object within the function will affect the original object outside the function as well, since they both point to the same location in memory.
    - এই টাইপের ডেটাগুলোতে ভ্যালু সরাসরি স্টোর করা থাকেনা কিন্তু এর পরিবর্তে ভ্যালুর রেফারেন্স হিসেবে মেমোরিতে সেইভ করা
    - যখন জাভাস্ক্রিপ্টে একটি নন-প্রিমিটিভ টাইপ `(objects, arrays, functions, ইত্যাদি)` ম্যানিপুলেট করা হয়, তখন আসলে আমরা `ডেটার` পরিবর্তে `ডেটার রেফারেন্স` নিয়ে কাজ করে থাকি। এর মানে হলো, যখন একটি `নন-প্রিমিটিভ টাইপকে` একটি `ফাংশনে` একটি `আর্গুমেন্ট` হিসাবে পাস করানো হয় অথবা এটিকে একটি ভেরিয়েবলের মদ্ধে বরাদ্দ করানো হয়, তখন আমরা সম্পূর্ণ ডেটা স্ট্রাকচারের একটি কপি তৈরি করার পরিবর্তে মেমোরিতে অরিজিনাল ডেটার একটি রেফারেন্স পাস বা বরাদ্দ করি।
    - জাভাস্ক্রিপ্ট প্রগ্রামিংয়ের এই ধরনের আচরণটি সামান্য পার্থক্যের দিকে নিয়ে যেতে পারে, বিশেষ করে যখন ফাংশনে অবজেক্ট আর্গুমেন্ট হিসাবে পাস করার সময়। যেহেতু আমরা রেফারেন্সের সাথে কাজ করবো, তাই একটি ফাংশনে পাস করা একটি অবজেক্টের ভেতরের ডেটা পরিবর্তন করলে, ফাংশনের বাইরের মূল অবজেক্টকেও ইফেক্ট করবে।
