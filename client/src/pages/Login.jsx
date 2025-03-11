import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', values);
      if (response.data.success) {
        navigate('/home');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Login failed.');
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h2>Welcome Back!</h2>
      <Form onSubmit={handleLogin} className="w-100" style={{ maxWidth: '400px' }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={values.email} 
            onChange={(e) => setValues({ ...values, email: e.target.value })} 
            required 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={values.password} 
            onChange={(e) => setValues({ ...values, password: e.target.value })} 
            required 
          />
        </Form.Group>
        <Button variant="danger" className="mt-3 w-100" type="submit">Log In</Button>
      </Form>
      <p className="mt-2">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Container>
  );
}

export default Login;
