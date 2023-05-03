import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [user, setUser] = useState(null);
  const [userGithub, setUserGithub] = useState(null);
  const {login, googleSignUp, githubSignUp} = useContext(AuthContext);
  // console.log('login', login, 'google', googleSignUp, 'github', githubSignUp);
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value; 
    console.log(email, password);

    login(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // google sing in
  const handleGoogleSignIn = () => {
    // console.log('google button click');
    googleSignUp(googleSignUp)
      .then((result) => {
        const googleSign = result.user;
        setUser(googleSign);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // github sign in
  const handleGithubSignIn = () => {
    // console.log('github button click');
    githubSignUp(githubSignUp)
      .then((result) => {
        const githubSign = result.user;
        setUserGithub(githubSign);
      })
      .catch((error) => {
        console.log(error);
      })
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
          <div>
            <Button onClick={handleGoogleSignIn} variant="outline-dark" className='d-block mb-3'><FaGoogle></FaGoogle> Google Sign-in</Button>
            {user && 
              <div>
                <h3>Google User: {user.displayName}</h3>
                <img src={user.photoURL} alt="" />
              </div>
            }
          </div>

          <div>
            <Button onClick={handleGithubSignIn} variant="outline-dark" className='d-block my-3'><FaGithub></FaGithub> GitHub Sign-in</Button>
            {userGithub && 
              <div>
                <h3>Github User: {userGithub.displayName}</h3>
                <img src={userGithub.photoURL} alt="" />
              </div>
            }
          </div>
          
        </div>
      </Form>
    </Container>
  );
};

export default Login;