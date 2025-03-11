import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';

function Signup() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img src="/heart-logo.png" alt="Sentim" width={80} />
        <h2 className="mt-3">To Six Years</h2>
        <p>And to a thousand more...</p>
        <Button variant="danger" size="lg" className="w-100">Sign Up</Button>
        <p className="mt-2">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </Container>
  );
}

export default Signup;
