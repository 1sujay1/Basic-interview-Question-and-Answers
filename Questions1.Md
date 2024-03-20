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
