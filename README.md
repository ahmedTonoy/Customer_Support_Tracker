### What is JSX, and why is it used?

JSX, stands for **JavaScript XML**, is a syntax extension for JS, that allows us to write HTML like codes inside javaScript. It makes UI code easier to write and understand.

### What is the difference between State and Props?

| Props                                                | State                                            |
| ---------------------------------------------------- | ------------------------------------------------ |
| Used to **pass data** from parent to child component | Used to **manage dynamic data** inside component |
| **Read-only** (can't be changed by child)            | Can be **changed** using setter function         |
| **Makes** component **reusable**                     | **Controls** component's **behavior**            |

### What is the useState hook, and how does it work?

`useState` is a **React Hook** that allows functional components to manage **_state_**. Any update of the state variable using the setter function triggers a **_re-render_** of the designated component.

### How can you share state between components in React?

State can be shared by **lifting up** state. For this, we have to move the state **_up_**, from a child component, until we meet a **common parent** of the components which want to share the state and then **pass** the state **as prop** **_down_** to the desired child component.

### How is event handling done in React?

React handles events using **camelCase syntax** and passes a function as the event handler. For example:

```js
<button onClick={() => handleClick("Hello")}>Click</button>
```
