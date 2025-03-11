import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Form } from 'react-bootstrap';

function BeforeMidnight() {
  const [filters, setFilters] = useState({ type: '', setting: '', budget: '' });
  const [activity, setActivity] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

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

      {/* Type Filter */}
      <Form.Group>
        <Form.Label>Choose Type of Activity</Form.Label>
        <div className="d-flex justify-content-center">
          {['Fun', 'Dine', 'Art'].map((type) => (
            <Button
              key={type}
              variant={filters.type === type ? "primary" : "outline-secondary"}
              className="mx-1"
              onClick={() => handleFilterChange('type', type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </Form.Group>

      {/* Setting Filter */}
      <Form.Group className="mt-3">
        <Form.Label>Choose Setting</Form.Label>
        <div className="d-flex justify-content-center">
          {['Outdoor', 'Indoor'].map((setting) => (
            <Button
              key={setting}
              variant={filters.setting === setting ? "primary" : "outline-secondary"}
              className="mx-1"
              onClick={() => handleFilterChange('setting', setting)}
            >
              {setting}
            </Button>
          ))}
        </div>
      </Form.Group>

      {/* Budget Filter */}
      <Form.Group className="mt-3">
        <Form.Label>Budget</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter budget (e.g., Under 500)"
          value={filters.budget}
          onChange={(e) => handleFilterChange('budget', e.target.value)}
        />
      </Form.Group>

      <Button className="mt-3 w-100" variant="danger" onClick={fetchActivity}>
        Generate Date Idea
      </Button>

      {activity && (
        <div className="mt-4 p-3 bg-danger text-white rounded">
          <h3>{activity.activity}</h3>
          <p>Budget: {activity.budget}</p>
          <Button variant="light">Save to Library</Button>
        </div>
      )}
    </Container>
  );
}

export default BeforeMidnight;
