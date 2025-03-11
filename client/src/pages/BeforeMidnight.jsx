import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Form } from 'react-bootstrap';

function BeforeMidnight() {
  const [filters, setFilters] = useState({ type: '', setting: '', budget: '' });
  const [activity, setActivity] = useState(null);

  const fetchActivity = async () => {
    try {
      const response = await axios.get('http://localhost:8080/before-midnight', { params: filters });
      setActivity(response.data);
    } catch (error) {
      console.error("Error fetching activity:", error);
      setActivity({ activity: "No activities found. Try different filters." });
    }
  };

  return (
    <Container className="text-center mt-4">
      <h2>Before Midnight</h2>
      <p>Plan an unforgettable date.</p>

      {/* Filters */}
      <Form.Group>
        <Form.Label>Choose Type of Activity</Form.Label>
        <div className="d-flex justify-content-center">
          {['Fun', 'Dine', 'Art'].map(type => (
            <Button key={type} variant="outline-secondary" className="mx-1"
              onClick={() => setFilters({ ...filters, type })}>
              {type}
            </Button>
          ))}
        </div>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Choose Setting</Form.Label>
        <div className="d-flex justify-content-center">
          {['Outdoor', 'Indoor'].map(setting => (
            <Button key={setting} variant="outline-secondary" className="mx-1"
              onClick={() => setFilters({ ...filters, setting })}>
              {setting}
            </Button>
          ))}
        </div>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Budget</Form.Label>
        <Form.Control type="text" placeholder="Enter budget (e.g., Under 500)"
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })} />
      </Form.Group>

      <Button className="mt-3 w-100" variant="danger" onClick={fetchActivity}>
        Generate Date Idea
      </Button>

      {activity && (
        <div className="mt-4 p-3 bg-danger text-white rounded">
          <h3>{activity.activity}</h3>
          <p>Budget: {activity.budget_range}</p>
          <Button variant="light">Save to Library</Button>
        </div>
      )}
    </Container>
  );
}

export default BeforeMidnight;
