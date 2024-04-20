Interview questions and answers

1. what are semantic elements?

A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: <div> and <span> - Tells nothing about its content. Examples of semantic elements: <form> , <table> , and <article> - Clearly defines its content.

2. Which model is widely used in SDLC?

Planning,Analysis,Design,Implementation (Coding),Testing,Deployment,Maintenance

Agile model

The Agile SDLC development method focuses on collaborative decision-making, customer satisfaction, and development over multiple short cycles or sprints, rather than a top-down process with a single series of stages

Waterfall Model

This is the most traditional and sequential model. Each phase of the SDLC must be completed before the next one can start, and there is no overlap between the phases. This model is simple to use and understand but doesn't handle change well. Pros: It's simple to understand and use

3. what is error boundary in react

In React, an error boundary is a React component that serves as a boundary to catch JavaScript errors that occur during the rendering of its children. When an error occurs in a component's subtree (i.e., within its children), React will propagate the error up the component tree until it reaches the nearest error boundary. The error boundary then captures the error and allows you to handle it gracefully, preventing the entire application from crashing.
Error boundaries are useful for:

Catching Errors: Error boundaries catch errors that occur during rendering, in lifecycle methods, and during constructor execution within their subtree.

Preventing App Crashes: By catching errors, error boundaries prevent the entire React application from crashing due to an unhandled JavaScript error in a component.

Displaying Fallback UI: Error boundaries allow you to display a fallback UI to users when an error occurs, providing a better user experience and indicating that something went wrong.

static getDerivedStateFromError(error): This method is called when an error is thrown during rendering. It allows the error boundary to update its state in response to the error.

componentDidCatch(error, info): This method is called when an error is caught within the subtree of the error boundary. It allows you to log the error or perform any necessary cleanup.

4. Can we make responsive website without media query with html?
a. Viewport Meta Tag: As mentioned earlier, you can use the viewport meta tag to ensure that the webpage renders appropriately on different devices. This meta tag is placed within the <head> section of your HTML document:
 <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

b. <img src="small.jpg" srcset="medium.jpg 1000w, large.jpg 2000w" width="100" alt="Responsive Image">

5. How do u fix this issue?
   let i;
   for (i = 0; i < 5; i++) {
   setTimeout(() => {
   console.log(i);
   }, i \* 2);
   }

5 5 5 5 5

ANS:

let i;
for (i = 0; i < 5; i++) {
function a(i) {
setTimeout(() => {
console.log(i);
}, i \* 2);
}
a(i);
}
0 1 2 3 4

6. AWS S3 : Simple Storage Service
   7.How to do create multithreading in node js
   a. Using Worker Threads: Node.js provides a built-in worker_threads module that allows you to create and run JavaScript code in separate threads. This module enables you to perform CPU-intensive tasks in parallel, making better use of multi-core systems. Here's a basic example:
   b. Using Clustering: Node.js provides the cluster module, which allows you to create child processes (each running on its own thread) to handle incoming network connections. This can be useful for building scalable network servers that utilize multiple CPU cores effectively.

7. How axios works behind the scene?

Behind the scenes, Axios uses the XMLHttpRequest (XHR) browser API to make HTTP requests in the browser environment. In Node.js, it uses the built-in http module to make requests. Here's a breakdown of how Axios works behind the scenes in both environments:
axios.interceptors.response.use(response => {
// Modify response data before resolving
console.log('Response received:', response);
return response;
}, error => {
return Promise.reject(error);
});

9.what is cors?
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the original web page.

There are several CORS-related HTTP headers:

Access-Control-Allow-Origin: This header specifies which origins are allowed to access the resource. It can contain either a single origin or a list of origins.

Access-Control-Allow-Methods: This header specifies which HTTP methods (e.g., GET, POST, PUT, DELETE) are allowed when accessing the resource.

Access-Control-Allow-Headers: This header specifies which HTTP headers can be used when making the actual request.

Access-Control-Allow-Credentials: This header indicates whether the browser should include credentials (e.g., cookies, HTTP authentication) in the request.

Access-Control-Max-Age: This header specifies how long the results of a preflight request (OPTIONS) can be cached.

Access-Control-Expose-Headers: This header allows a server to specify which headers are exposed to the browser when making a cross-origin request.

10. WHY JWT is used?
    (JSON Web Tokens) is widely used for several reasons:

Statelessness: JWTs are stateless authentication tokens. Once issued by the server, they contain all necessary information (claims) about the user, reducing the need for the server to store session data. This makes JWTs suitable for stateless authentication mechanisms, such as RESTful APIs.

Compactness and Efficiency: JWTs are compact and lightweight, making them efficient for transmitting data over the network. They are typically encoded using JSON and can be easily parsed by client-side JavaScript frameworks and libraries.

Security: JWTs can be digitally signed and optionally encrypted to ensure data integrity and confidentiality. By using cryptographic algorithms such as HMAC (Hash-based Message Authentication Code) or RSA (Rivest-Shamir-Adleman), JWTs can be securely verified by the server to ensure that they haven't been tampered with.

Flexibility: JWTs are flexible and extensible, allowing developers to include custom claims in the token payload to convey additional information about the user or the authentication context. This flexibility makes JWTs suitable for a wide range of use cases beyond authentication, such as authorization, identity assertion, and information exchange between different systems.

Standardization and Interoperability: JWT is an open standard (RFC 7519) that is widely adopted across various programming languages, platforms, and frameworks. This standardization promotes interoperability and allows JWT-based authentication solutions to be easily integrated into existing systems and services.

Ease of Implementation: Implementing JWT-based authentication is relatively straightforward, especially with the availability of libraries and middleware for generating, parsing, and verifying JWTs in different programming languages. This ease of implementation reduces development time and effort when incorporating JWT-based authentication into applications.

11. streams in node js

Streams in Node.js are powerful tools for handling I/O operations efficiently, especially when dealing with large amounts of data. They allow you to read from or write to a source/destination incrementally, piece by piece, rather than loading the entire data into memory at once. This makes streams memory-efficient and suitable for processing large files, network responses, or real-time data.

Node.js provides four types of streams:

Readable Streams: Readable streams represent a source from which data can be read. Examples include reading from files, network sockets, or HTTP requests. You can consume data from a readable stream using events such as 'data', 'end', and 'error', or by using the pipe() method to pipe data to a writable stream.

Writable Streams: Writable streams represent a destination to which data can be written. Examples include writing to files, network sockets, or HTTP responses. You can write data to a writable stream using the write() method or by piping data from a readable stream.

Duplex Streams: Duplex streams represent both a readable and a writable stream. They allow bidirectional communication, where data can be both read from and written to the stream simultaneously. Examples include TCP sockets.

Transform Streams: Transform streams are a special type of duplex stream that allows you to modify or transform the data as it passes through the stream. Examples include compressing or decompressing data, encrypting or decrypting data, or converting data from one format to another.

12. what is security in node js

Security in Node.js refers to the practices, mechanisms, and tools used to protect Node.js applications and the underlying infrastructure from various security threats and vulnerabilities. Given that Node.js is a runtime environment for executing JavaScript code, security considerations are essential to prevent unauthorized access, data breaches, injection attacks, and other malicious activities.

Here are some important aspects of security in Node.js:

Input Validation: Always validate and sanitize user input to prevent injection attacks, such as SQL injection, NoSQL injection, and cross-site scripting (XSS) attacks. Use libraries like validator or express-validator to validate input data.

Authentication and Authorization: Implement robust authentication mechanisms to verify the identity of users and ensure that only authorized users can access protected resources. Use libraries like Passport.js for authentication and jsonwebtoken for issuing and verifying JSON Web Tokens (JWT) for authorization.

Secure Dependencies: Regularly update and patch dependencies to address security vulnerabilities. Use tools like npm audit to identify vulnerable dependencies and npm audit fix to automatically fix known security issues.

Secure Communication: Use HTTPS for encrypting data transmitted over the network to prevent eavesdropping and man-in-the-middle attacks. Utilize libraries like https or tls to create secure servers and clients.

Session Management: Securely manage user sessions to prevent session fixation, session hijacking, and session replay attacks. Store session data securely, use secure cookies with HttpOnly and Secure flags, and rotate session tokens regularly.

Cross-Site Request Forgery (CSRF) Protection: Implement CSRF tokens and validate them on the server-side to prevent CSRF attacks. Use libraries like csurf to add CSRF protection to your Node.js applications.

Content Security Policy (CSP): Implement CSP headers to mitigate the risks of XSS attacks by restricting the sources from which content (scripts, stylesheets, images, etc.) can be loaded.

File Upload Security: If your application allows file uploads, validate file types, restrict file sizes, and store uploaded files in a secure location outside of the web root directory. Use libraries like multer for handling file uploads securely.

Error Handling and Logging: Implement proper error handling and logging mechanisms to capture and log errors securely. Avoid leaking sensitive information in error messages that could be exploited by attackers.

Security Headers: Set security-related HTTP headers, such as X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection, to enhance the security of your Node.js applications.

13. What is Event loop in js

The event loop is a core concept in JavaScript, and it plays a crucial role in how asynchronous operations are handled in the language. While Node.js has its own event loop implementation, the concept remains the same in both browser-based JavaScript and Node.js.

Here's an overview of how the event loop works in JavaScript:

Call Stack: JavaScript is single-threaded, meaning it has only one call stack to execute code synchronously. The call stack is a data structure that keeps track of function calls in the execution context.

Asynchronous Operations: JavaScript supports asynchronous operations such as setTimeout, setInterval, AJAX requests, and event handlers (e.g., onClick, onLoad).

Event Queue: Asynchronous operations don't block the main thread. Instead, when an asynchronous operation is initiated, it is pushed to the event queue once it's completed. The event queue holds tasks that are ready to be executed.

Event Loop: The event loop continually checks the call stack and the event queue. If the call stack is empty and there are tasks in the event queue, the event loop will move tasks from the event queue to the call stack for execution.

Execution of Tasks: When a task is moved from the event queue to the call stack, it's executed synchronously. If the task is asynchronous (e.g., a callback function), it's placed in the call stack once the call stack is empty and executed.

Non-Blocking Nature: Asynchronous operations allow JavaScript to perform tasks such as fetching data from a server or updating the UI without blocking the main thread. This enables JavaScript to handle multiple tasks concurrently, providing a smoother user experience.

14. Difference between setimmediate and process.nexttick

setImmediate and process.nextTick are both functions provided by Node.js for scheduling asynchronous operations, but they have different behaviors and purposes:

Timing of Execution:

process.nextTick: The callback provided to process.nextTick is executed immediately after the current operation completes and before the event loop continues. It has the highest priority among asynchronous tasks, allowing it to be executed before any I/O events.
setImmediate: The callback provided to setImmediate is executed after the I/O events in the current event loop iteration but before any timers scheduled for the next event loop iteration. It has a lower priority compared to process.nextTick.

15. what is memory management in node js

Memory management in Node.js refers to the process of allocating and deallocating memory resources within the Node.js runtime environment. Node.js, like any other runtime environment, manages memory to ensure efficient usage and prevent issues such as memory leaks and excessive memory consumption.

Here are some key aspects of memory management in Node.js:

Garbage Collection: Node.js uses automatic garbage collection to reclaim memory occupied by objects that are no longer in use. The V8 JavaScript engine, which powers Node.js, employs a generational garbage collection algorithm that divides objects into different generations based on their age. This allows for efficient collection of short-lived objects and minimizes the impact of garbage collection pauses on application performance.

Memory Allocation: Node.js manages memory allocation for objects created during the execution of JavaScript code. It utilizes the V8 heap, a region of memory where objects are stored, to allocate memory dynamically as needed. Memory allocation is optimized for performance, and V8 employs various techniques such as object pooling and allocation tracking to minimize overhead.

Buffer Management: Node.js provides a Buffer class for handling binary data, such as file I/O operations or network communication. Buffers allow efficient manipulation of raw binary data and are managed by Node.js's memory allocator. It's important to manage buffer usage carefully to avoid excessive memory consumption, especially when dealing with large volumes of data.

Memory Profiling: Node.js includes built-in tools for memory profiling, such as the --inspect flag and the Chrome DevTools protocol. These tools allow developers to analyze memory usage, identify memory leaks, and optimize memory-intensive parts of their applications.

External Memory Management: Node.js applications may interact with external resources that consume memory, such as database connections, network sockets, or child processes. Proper management of these resources, including closing connections and releasing resources when they are no longer needed, is essential to prevent memory leaks and resource exhaustion.

Memory Leak Detection: Node.js applications can experience memory leaks, where memory is allocated but not released, leading to excessive memory consumption over time. Monitoring memory usage and using tools like heap snapshots and memory profilers can help identify and diagnose memory leaks in Node.js applications.

Overall, effective memory management is crucial for optimizing the performance and stability of Node.js applications. By understanding and implementing best practices for memory management, developers can ensure efficient memory usage, prevent memory-related issues, and maintain the scalability and reliability of their Node.js applications.

16. Effiency and Memory Management in React JS

In React.js, memory management and efficiency are critical aspects of building high-performance and scalable applications. While React itself handles much of the memory management under the hood, developers can employ several techniques to optimize memory usage and improve overall efficiency:

Virtual DOM: React uses a virtual DOM to represent the UI hierarchy. Instead of directly manipulating the browser's DOM, React updates a virtual representation of the DOM and then efficiently computes the minimum number of changes required to update the actual DOM. This approach reduces the frequency of DOM updates and improves performance.

Component Lifecycle: Understanding the component lifecycle in React is essential for efficient memory management. Developers should implement lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount to perform tasks like initializing state, fetching data, and cleaning up resources when components are mounted, updated, or unmounted.

State Management: Proper state management is crucial for efficient memory usage in React applications. Avoid storing unnecessary data in component state and instead use props or context to pass data down the component tree. Consider using state management libraries like Redux or MobX for managing global application state and minimizing unnecessary re-renders.

Component Reusability: Encapsulate reusable UI elements into smaller, composable components. This promotes code reuse and makes it easier to reason about the application's structure. Reusing components also reduces the memory footprint of the application by minimizing the number of component instances created.

Optimizing Renders: React's reconciliation algorithm ensures that only components affected by state or props changes are re-rendered. However, developers can further optimize renders by implementing shouldComponentUpdate or PureComponent to prevent unnecessary re-renders of components that haven't changed.

Memoization and Memoizing Hooks: Use memoization techniques to cache expensive computations and avoid redundant calculations. React provides the useMemo and useCallback hooks for memoizing values and functions, respectively, to improve performance and reduce unnecessary work.

Code Splitting and Lazy Loading: Split large React applications into smaller chunks using code splitting. This allows you to load only the necessary code for the current route or view, reducing initial load times and memory usage. Use React's lazy and Suspense features to lazily load components and display loading indicators while components are being fetched.

Memory Profiling and Optimization: Utilize tools like the React Developer Tools, Chrome DevTools, and performance monitoring libraries to profile memory usage, identify performance bottlenecks, and optimize your React application's memory footprint.

17. for of > used for Strings, Arrays
    for in > used to iterate Objects
    Usage of Sort, Split, reverse, join
18. useMemo is used to memoize the result of a function so that the function is not re-executed on every render unless its dependencies change.
function MyComponent({ a, b }) {
    const result = useMemo(() => {
        // Expensive calculation
        return a + b;
    }, [a, b]); // Dependency array

    return <div>{result}</div>;
}
useCallback is used to memoize callbacks, preventing unnecessary re-renders of child components that depend on them.
function MyComponent({ onClick }) {
    const handleClick = useCallback(() => {
        // Handle click
        onClick();
    }, [onClick]); // Dependency array

    return <button onClick={handleClick}>Click Me</button>;
}

19. CALL and APPLY
CALL: The call method is used to invoke a function with a specified this value and individual arguments.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet.call(null, 'John'));
APPLY:The apply method is similar to call, but it accepts arguments as an array.
It also allows you to specify the this context like call.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet.apply(null, ['John']));
PUT: put is used in redux-saga for dispatching actions.


20. what are generator functions in react?
In JavaScript, generator functions are special functions that can pause execution and yield multiple values one at a time. They are defined using the function* syntax and contain one or more yield statements.

function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = myGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

21. what is currying in js?
Currying is a functional programming concept in JavaScript (and many other languages) where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// Non-curried function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Curried version of add function
function curryAdd(a) {
    return function(b) {
        return a + b;
    };
}

const addTwo = curryAdd(2);
console.log(addTwo(3)); // Output: 5


22.What is the Virtual DOM?
The Virtual DOM is a lightweight, in-memory representation of the actual DOM in a React application.
React uses the Virtual DOM to perform efficient updates to the UI. When the state of a component changes, React first updates the Virtual DOM instead of the actual DOM.
React then calculates the difference between the Virtual DOM and the actual DOM (reconciliation) and only updates the parts of the DOM that have changed, minimizing the number of DOM manipulations.
23. How does React Router work?

React Router is a popular routing library for React that enables navigation between different components in a React application.

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/simple-react-router" element={<ProductList />} />
          <Route path="*" element={<ProductList />} />
  </Routes>

24. Usage of CreateContext

import React,{createContext} from 'react'
const MyContext = createContext();


function ContextProvider({children}){
return (
<MyContext.Provider value ={{name:"welcome to Sujay's World"}}>
{children}
</MyContext.Provider>
)
}

import React, { useContext } from "react";
import { MyContext } from "./ContextProvider";
const { name } = useContext(MyContext);

In Store


import { createStore, combineReducers } from "redux";
import reducers from "./reducers";
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

In app.js

import store from "./redux/store";
import { Provider } from "react-redux";
import ContextProvider from "./components/ContextProvider";
function App() {
  return (
    <Router>
      {/* <ContextProvider> */}
      <Provider store={store}>
        <Home />
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todos" element={<TodoTest />} />
          <Route path="/context" element={<Context />} />
          <Route path="/bidirec" element={<BiDirectional />} />
          <Route path="/child1" element={<ChildComponent1 />} />
        </Routes>
      </Provider>
      {/* </ContextProvider> */}
    </Router>
  );
}

25 Practice TODO list, longest string and other programs from below URL
https://github.com/1sujay1/react_login_register

26. What is Closure?
Inner function forms a lexical scope with outside variable and forms a bundle.

Closures are powerful in JavaScript as they allow functions to retain access to variables from their parent scopes even after the parent function has finished executing. They are commonly used in scenarios like data privacy, encapsulation, and creating factory functions.

function outerFunction() {
    // Variable defined in the outer function
    let outerVar = 'I am outer';

    // Inner function (closure)
    function innerFunction() {
        // Accessing outerVar from the outer function
        console.log(outerVar);
    }

    // Returning the inner function
    return innerFunction;
}

// Call the outer function, which returns the inner function
const closureExample = outerFunction();

// Call the inner function (closure)
closureExample(); // Output: "I am outer"

27. What is clustering in NODE JS?

In Node.js, clustering is a technique used to improve the performance and scalability of applications by distributing the workload across multiple processes, utilizing all available CPU cores. This is particularly useful for applications that have high CPU utilization or handle a large number of concurrent requests.

Node.js provides a built-in module called cluster that allows you to create a cluster of worker processes. The master process manages the worker processes and distributes incoming connections or tasks among them.

Here's a basic example of how clustering works in Node.js:

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork worker processes based on the number of CPU cores
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for the exit event and restart worker processes if they crash
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    // Worker processes handle incoming requests
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}

In this example:

The master process (identified by cluster.isMaster) is responsible for spawning and managing worker processes.
For each CPU core, the master process forks a worker process using cluster.fork().
Each worker process (identified by cluster.isWorker) listens for incoming HTTP requests and handles them.
If a worker process crashes or exits for any reason, the master process restarts it automatically.
By distributing the workload across multiple processes, clustering can improve the application's performance, throughput, and resilience to failures. It allows Node.js applications to take advantage of the multi-core architecture of modern CPUs. However, it's important to note that clustering is not suitable for all types of applications, and its effectiveness depends on the nature of the workload and the application's architecture.

28. What design pattern is used in node JS?

The factory method pattern
The singleton pattern
The builder pattern
The prototype pattern
The observer pattern

The Singleton Pattern :

The Singleton pattern is one of the most important creational design patterns, ensuring that an abstract class in the code only has one instance that offers a global point to the developers who want to access this instance for the entire application. Developers can use this Node.js design patterns to enable the shared resource’s utilization without the risk of creating multiple instances throughout the application.

The Builder Pattern :

The builder design pattern is another one of the most popular types of design patterns. This pattern enables developers to separate the construction of objects  from their representation. This approach enables the developers to simplify the code that is complex and also creates complex objects. To understand the builder design pattern more clearly, let us go through an example. Here is an example in which classes named Car and CarBuilder enable users to create a car.

The Observer Pattern
The Observer pattern is also one of the popular types of Node.js patterns when it comes to creating applications with simple approaches. A behavioral design pattern known as a one-to-many dependency injection enables developers to define a dependency between the program’s objects. This implies that when an object in the code changes its state, it automatically notifies all dependent objects about the change, and they update accordingly. Using this pattern is beneficial when Node.js developers want to implement real-time updates, such as  push notifications in their programs.
To understand this concept clearly, let’s have a look at this example. An application for the stock exchange requires the implementation of an update using the Observer pattern whenever a stock price changes. In this case, when the stock price changes, the observer objects will get notified immediately and an automatic update will occur to ensure that the users get the latest data on time.

The Factory Method Pattern
Another popular Node.js design pattern is the factory pattern. A creational design pattern known as a type of pattern is capable of creating objects without the need to specify the exact class of objects that must be created. This approach proves very helpful in Node.js when developers intend to create a program where they have to create the same object or it might get created at multiple places in the entire application.

With the help of the Factory design pattern, the Node.js developers can make a single object of the application act as a factory and that object will be then responsible for creating new objects. The object that acts like a factory can configure itself to return different types of objects based on the inputs it receives from the client side. This approach makes it easier for any application to change its object creation process without any requirement of modifying the code in various places.

The Prototype Pattern
The last Node.js design pattern in our list is the prototype pattern. One must know that JavaScript is a very popular prototype-based language before understanding it. This language makes use of prototypal inheritance, implying that each object in this approach has the capability to inherit from other objects. Developers can, therefore, use the prototype design patterns to create objects by cloning the value of the prototype, known as a sample object. This pattern ensures that the prototype acts as the blueprint for all the new objects created for an application when developers use it.

30 :Functional Prototype

// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create instances of the Person object
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Call the greet method on instances
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

OR

// Define a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Add a method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create instances of the Person class
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Call the greet method on instances
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

31. Object Prototype
// Adding a custom method to the Object prototype
Object.prototype.printKeys = function() {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            console.log(key);
        }
    }
};

// Creating an object
const obj = { a: 1, b: 2, c: 3 };

// Using the custom method
obj.printKeys(); // Output: a, b, c

32. Array Prototype

// Adding a custom method to the Array prototype
Array.prototype.customSum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

// Creating an array
const arr = [1, 2, 3, 4, 5];

// Using the custom method
console.log(arr.customSum()); // Output: 15 (1 + 2 + 3 + 4 + 5)

33. What is the Algorithm used in Load Balancing of Kubernetes?
Ans: round-robin algorithm
The round-robin algorithm is among the most popular. In round-robin, requests are distributed sequentially to each backend pod in the order they were added.

















