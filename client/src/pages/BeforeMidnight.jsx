import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

function BeforeMidnight() {
  const [activity, setActivity] = useState('');

  const generateActivity = () => {
    setActivity('PICNIC'); // Placeholder logic, replace with API call if needed
  };

  return (
    <Container className="text-center mt-4">
      <h2>Before Midnight</h2>
      <p>Moments we will never forget.</p>
      <Form.Group>
        <Form.Label>Choose Type of Activity</Form.Label>
        <div className="d-flex justify-content-center">
          <Button variant="outline-secondary" className="mx-1">Any</Button>
          <Button variant="outline-secondary" className="mx-1">Fun</Button>
          <Button variant="outline-secondary" className="mx-1">Dine</Button>
          <Button variant="outline-secondary" className="mx-1">Art</Button>
        </div>
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Choose Setting</Form.Label>
        <div className="d-flex justify-content-center">
          <Button variant="outline-secondary" className="mx-1">Outdoor</Button>
          <Button variant="outline-secondary" className="mx-1">Indoor</Button>
        </div>
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Budget (PHP)</Form.Label>
        <Form.Control type="text" placeholder="Enter budget" />
      </Form.Group>
      <Button className="mt-3 w-100" variant="danger" onClick={generateActivity}>Generate</Button>
      {activity && (
        <div className="mt-4 p-3 bg-danger text-white rounded">
          <h3>{activity}</h3>
          <p>Budget: P500</p>
          <Button variant="light">Save to Library</Button>
        </div>
      )}
    </Container>
  );
}

export default BeforeMidnight;