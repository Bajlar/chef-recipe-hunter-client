import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
  return (
    <Container className='my-4'>
      <Card>
        <Card.Body>
          <Card.Text>
            <h1 className='display-5 fw-bold text-decoration-underline'>Answer the following questions:</h1>
            <div>
              <h3>Tell us the differences between uncontrolled and controlled components</h3>
              <p>
                In software engineering, components can be classified into two broad categories: controlled components and uncontrolled components.
              </p>
              <p>
                Controlled components are those that are managed and rendered by a parent component, which can pass data and events to them as props. They are tightly coupled to the parent component and rely on it for their behavior. Examples of controlled components include form elements such as input fields and dropdown menus, which receive their value and state from the parent component and update it as the user interacts with them.
              </p>
              <p>
                Uncontrolled components, on the other hand, manage their state internally and do not rely on a parent component to control their behavior. They can be initialized with default values and can update their state based on user input without notifying the parent component. Examples of uncontrolled components include form elements such as checkboxes and radio buttons, which store their state internally and expose their values through a ref.
              </p>
              <p>
                In summary, controlled components are tightly coupled to their parent component and rely on it for their behavior, while uncontrolled components manage their state internally and do not require a parent component to control their behavior.
              </p>
            </div>
            <div className="mt-4">
              <h3>How to validate React props using PropTypes</h3>
              <p>
                React PropTypes is a library that allows you to specify the data type and shape of props that a component should receive. Here's an example of how to use PropTypes to validate props in a React component:
              </p>
              <ol>
                <li>First, you need to install PropTypes</li>
                <li>Next, import PropTypes in your component file</li>
                <li>Then, define the propTypes object inside your component</li>
              </ol>
            </div>
            <div className="mt-4">
              <h3>Tell us the difference between nodejs and express js</h3>
              <p>
                Node.js is a JavaScript runtime that allows developers to run JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model, which makes it well-suited for building scalable and high-performance applications.
              </p>
              <p>
                Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, and templates.
              </p>
              <p>
                Here are some of the key differences between Node.js and Express.js
              </p>
              <ol>
                <li>
                  Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.
                </li>
                <li>
                  Node.js provides the core functionality for building server-side applications, such as file system access and network communication. Express.js provides a layer of abstraction on top of Node.js to simplify building web applications and APIs.
                </li>
                <li>
                  Node.js is low-level and requires developers to write more code to build a web application or API from scratch. Express.js provides a higher-level abstraction and simplifies the process of building web applications and APIs.
                </li>
                <li>
                  Node.js is suitable for building a wide range of applications, not just web applications. Express.js is specifically designed for building web applications and APIs.
                </li>
                <li>
                  Express.js provides additional features such as routing and middleware, which Node.js does not provide out of the box.
                </li>
              </ol>
              <p>
                In summary, Node.js provides the runtime environment for building server-side applications, while Express.js is a web application framework that simplifies the process of building web applications and APIs on top of Node.js.
              </p>
            </div>
            <div className="mt-4">
              <h3>What is a custom hook, and why will you create a custom hook</h3>
              <p>
                In React, a custom hook is a JavaScript function that starts with the word "use" and allows you to share logic between multiple components. Custom hooks are a way to abstract away common logic and create reusable pieces of code that can be used across multiple components in a React application.
              </p>
              <p>
                Here are some reasons why you might want to create a custom hook
              </p>
              <ol>
                <li>
                  Reusability: Custom hooks allow you to share logic between multiple components, which can reduce code duplication and make your code more maintainable.
                </li>
                <li>
                  Abstraction: Custom hooks allow you to abstract away common logic and create a more declarative API for your components.
                </li>
                <li>
                  Encapsulation: Custom hooks can encapsulate complex logic and state management, making it easier to reason about and test your code.
                </li>
                <li>
                  Separation of concerns: Custom hooks can separate the concerns of your components, allowing you to keep your business logic separate from your presentation logic.
                </li>
              </ol>
              <p>
                In summary, custom hooks are a way to share logic between multiple components in a React application, and can help reduce code duplication, make your code more maintainable, and improve the encapsulation and separation of concerns in your code.
              </p>
            </div>
            <div className="mt-3">
              <Button variant="dark"><FaDownload></FaDownload> Pdf Download</Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Blog;