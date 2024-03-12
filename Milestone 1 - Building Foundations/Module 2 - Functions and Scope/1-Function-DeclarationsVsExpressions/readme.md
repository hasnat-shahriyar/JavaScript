# Function Declarations:

Function Declarations are defined using the `function` keyword followed by the function name and a set of parentheses containing optional parameters. This type of declaration is hoisted, meaning it's moved to the top of the current scope during the compilation phase.

বাংলা: ফাংশন ডিক্লেয়ার করা বলতে বোঝায় একটি `ফাংশন` কিওয়ার্ড ইউজ করে "ফাংশনের নাম" `function নাম` এবং "parentheses" `()` এর ভেতরে একটি অপশনাল প্যারামিটার সংলগ্ন `(প্যারামিটার)` । এই ধরণের ডিক্লেয়ারেশনকে হইস্টেড বলা হয়, মানে হচ্ছে এটা উপরের বর্তমান স্কোপে স্থানান্তরিত হয় কম্পিলেশন এর পর্যায়ে ।

## Function Declarations have the following characteristics:

- They are hoisted to the top of their scope.
- They can be called before they are declared in the code.
- They have a name that can be used within the function body.

## বাংলা: ফাংশন ডিক্লেয়ার করার নিম্নলিখিত বৈশিষ্ট্য রয়েছে:

- তারা তাদের উপরের দিকে বর্তমান স্কোপে হইস্টেড হয়।
- কোডে ডিক্লেয়ার করার আগেই তাদের কল করা যেতে পারে।
- তাদের একটি নাম রয়েছে যা ফাংশন বডির মধ্যে ব্যবহার করা যেতে পারে।

# Function Expressions:

Function Expressions define a function as part of an expression, typically by assigning it to a variable. Function Expressions are not hoisted like Function Declarations, and they can't be called before they're defined.

বাংলা: ফাংশন এক্সপ্রেশনে একটি ফাংশনকে একটি এক্সপ্রেশনের অংশ হিসাবে সংজ্ঞায়িত করে, সাধারণত এটি একটি ভেরিয়েবলের সাথে এসাইন করা হয় `const ভ্যারিয়েবল = function (প্যারামিটার)`। তবে ফাংশন এক্সপ্রেশনসমূহ ফাংশন ডিক্লেয়ারেশনের মতো হইস্টেড হয় না, এবং নির্ধারিত (ডিফাইন) হওয়ার আগে তাদের ডাকা (কল) করা যায় না ।

## Function Expressions have the following characteristics:

- They are not hoisted to the top of their scope.
- They can't be called before they are defined in the code.
- They can be anonymous (no function name) or named (if assigned to a variable).

## বাংলা: ফাংশন এক্সপ্রেশনের নিম্নলিখিত বৈশিষ্ট্য রয়েছে:

- তারা তাদের উপরের স্কোপে হইস্টেড হয় না।
- নির্ধারিত (ডিফাইন) হওয়ার আগে তাদের ডাকা (কল) করা যায় না ।
- তারা নামহীন হতে পারে (কোনপ্রকার ফাংশনের নাম ছাড়া) অথবা নামকরণসহ থাকতে পারে (যদি একটি ভেরিয়েবলে বরাদ্দ করা হয়)।

### Example of Using Both:

```javascript
greet("Nahin"); // This works with both declarations and expressions

function greet(name) {
  return "Hello, " + name + "!";
}

const greet = function (name) {
  return "Hello, " + name + "!";
};
```

### Summary:

- Function Declarations are hoisted and can be called before they are defined.
- Function Expressions are not hoisted and must be defined before they are called. They can be anonymous or named.
