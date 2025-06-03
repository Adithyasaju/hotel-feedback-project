import React, { useState } from 'react';
import axios from 'axios';

const GuestForm = () => {
  const [guestName, setGuestName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/guest/feedback', {
        guestName,
        rating,
        comment
      });
      setMessage('Feedback submitted!');
      setGuestName('');
      setRating('');
      setComment('');
    } catch (error) {
      console.error(error);
      setMessage('Submission failed.');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#f9f9f9'
      }}
    >
      <h2>Guest Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          type="number"
          value={rating}
          onChange={(e) => {
            const val = e.target.value;
            if (val === '' || (val >= 1 && val <= 5)) {
              setRating(val);
            }
          }}
          placeholder="Rating (1-5)"
          required
          min="1"
          max="5"
        />
        <textarea
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          required
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuestForm;
