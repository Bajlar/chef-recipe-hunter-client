import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }

  return (
    <Container className='my-5 w-50 mx-auto'>
      <Form onSubmit={handleLogin}>
        <h2>Login your account</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkup">
          <Form.Text className="text-muted">
          <p style={{fontSize: '1rem'}}>New to Food Zone? <Link to='/register' className='text-warning text-decoration-none fw-medium'>Create New Account</Link></p>
          </Form.Text>
        </Form.Group>
        
        <Button variant="dark" type="submit">
          Login
        </Button>

        <div className='mt-3'>
          <Button variant="outline-dark" className='d-block'><FaGoogle></FaGoogle> Google Sign-in</Button>
          <Button variant="outline-dark" className='d-block mt-3'><FaGithub></FaGithub> GitHub Sign-in</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;