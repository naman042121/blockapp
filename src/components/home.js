import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    startDate: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Local Storage से मौजूदा डेटा प्राप्त करें
    const storedData = localStorage.getItem('formDataList');
    const formDataList = storedData ? JSON.parse(storedData) : [];

    // नए डेटा को मौजूदा डेटा की लिस्ट में जोड़ें
    formDataList.push(formData);

    // अपडेटेड लिस्ट को Local Storage में स्टोर करें
    localStorage.setItem('formDataList', JSON.stringify(formDataList));

    alert('Form data has been saved to Local Storage!');
    navigate('/list');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
