<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B

<i>Answer is B. Because, In the first line 'greeting' has declared. But in the second line, an empty object 'greetign' is initialized. 'greeting' and 'greetign' are different and as the object 'greetign' isn't declared it will throw this error: `ReferenceError: greetign is not defined`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Answer is C. JavaScript performs type coercion and converts the number 1 to a string to perform string concatenation instead of numerical addition. As a result, the function concatenates the two values as strings, resulting in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Answer is A. Changing the value of 'info.favoriteFood' does not affect the original array 'food'. The info object is a separate entity from the 'food' array, and changing the object's property does not modify the array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Answer is B. In the provided code, the sayHi function expects a name parameter. When you call the function without passing any arguments, the name parameter inside the function will be undefined. However, the template string in the return statement is trying to concatenate the name parameter, which is undefined. In JavaScript, when you concatenate a string with undefined, the output will be a string containing the word "undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Answer is C. In JavaScript, when we use a number in a condition, 0 is considered falsy, and any other non-zero number is considered truthy. So, the condition if (num) evaluates to true for all elements in the 'nums' array except 0. For num = 0, the condition evaluates to false, and nothing happens. For the other elements (1, 2, and 3), the condition evaluates to true, and count is incremented by 1 for each of these elements. Thus, the code will give 3. </i>

</p>
</details>
