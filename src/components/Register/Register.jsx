import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {createUser} = useContext(AuthContext);
  // console.log(createUser);

  const handleRegister = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    setError('');
    setSuccess('');
    if(password.length < 6) {
      setError('password must be 6 characters or longer');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        setSuccess('Your Registration is successful');
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
  }

  return (
    <Container className='my-5 w-50 mx-auto'>
      <Form onSubmit={handleRegister}>
        <h2>Register your account</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo URL" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
            type="checkbox" 
            name="accept"
            label="Accept Term and Conditions" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkup">
          <Form.Text className="text-muted">
          <p style={{fontSize: '1rem'}}>Already have an account? <Link to='/login' className='text-warning text-decoration-none fw-medium'>Login</Link></p>
          </Form.Text>
        </Form.Group>
        
        <Button variant="dark" type="submit">
          Register
        </Button>

        <Form.Text className='text-success'>
          <p>{success}</p>
        </Form.Text>
        <Form.Text className='text-danger'>
          <p>{error}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;