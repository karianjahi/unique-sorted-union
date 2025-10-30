# 🔗 Unique Sorted Union

A simple yet powerful **JavaScript function** that merges multiple arrays into **one unique array**, keeping all values **in the order they first appear** 🧩  

This project is great for practicing **arguments objects**, **rest parameters**, and **array iteration techniques** in JavaScript.

---

## 📁 Project Structure
```bash
unique-sorted-union/
├── .gitignore
├── LICENSE
├── README.md
└── source.js
```

---

## 🚀 Description

The goal of this project is to implement a function named **`uniteUnique`** that takes **two or more arrays** as input and returns a **new array** that:

- Contains **unique** elements only 🧮  
- Maintains the **original order** in which they first appeared across all arrays 🕒  
- Works for any number of array arguments 🎯  

Example:
```js
    uniteUnique([1, 2, 4], [2, 3, 5]);
    ➡️ Output: [1, 2, 4, 3, 5]
```
---

## 🧠 JavaScript Concepts Practiced

| Concept | Description |
|----------|--------------|
| **Rest Parameters (`...args`)** | Used to accept an arbitrary number of arrays as function arguments |
| **Nested Loops** | To iterate through arrays and their elements |
| **`includes()` Method** | Ensures each value is unique by checking before pushing |
| **Push & Conditional Logic** | Appends only unseen elements to the resulting array |
| **Return Values** | Demonstrates how functions can output newly built data |

---

## 💡 Function Implementation
```js
    const uniteUnique = (...args) => {
      let newArray = [];
      for (const arg of args)
        for (const item of arg)
          if (!newArray.includes(item)) newArray.push(item);
      return newArray;
    };
```
---

## 🧪 Example Tests
```js
    console.log(uniteUnique([3, 5, 1], [2, 7, 9], [3, 8, 1]));
    ➡️ [3, 5, 1, 2, 7, 9, 8]

    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
    ➡️ [1, 3, 2, 5, 4]

    console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
    ➡️ [1, 2, 3, 5]

    console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
    ➡️ [1, 2, 3, 5, 4, 6, 7, 8]

    console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
    ➡️ [1, 3, 2, 5, 4, 6]
```
---

## 🧩 Usage

Run the code using **Node.js**:
```bash
    node source.js
```
You’ll see the test outputs logged in the console.

---

## 📜 License

Licensed under the **MIT License** — see the LICENSE file for details.

---

## 💬 Contributing

Contributions, ideas, and improvements are always welcome!  
Fork the repo, make your changes, and submit a pull request 🚀

---

## 🧭 Summary

**uniteUnique** helps you:
- Practice **array manipulation**
- Deepen understanding of **JavaScript fundamentals**
- Build confidence in handling **dynamic arguments**

💪 “Simplicity is the soul of efficiency.” – Austin Freeman
