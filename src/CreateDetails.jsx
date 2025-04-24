import { useState } from 'react';

const CreateDetails = () => {
  const [formData, setFormData] = useState({ id: '', employeeName: '', designation: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('Item created successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to create item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="heading">Employee App</h1>
      <div>
        <input
          placeholder="Employee ID: 101"
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Employee Name"
          type="text"
          id="employeeName"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Employee Designation"
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Create Employee Record</button>
      </div>
    </form>
  );
};

export default CreateDetails;
