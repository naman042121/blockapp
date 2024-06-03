import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formDataList');
    const formDataList = storedData ? JSON.parse(storedData) : [];
    const selectedData = formDataList[id];
    setData(selectedData);
  }, [id]);

  const handleDelete = () => {
    const storedData = localStorage.getItem('formDataList');
    const formDataList = storedData ? JSON.parse(storedData) : [];

    // Selected item को लिस्ट से हटाएँ
    formDataList.splice(id, 1);

    // अपडेटेड लिस्ट को Local Storage में स्टोर करें
    localStorage.setItem('formDataList', JSON.stringify(formDataList));

    // User को List Page पर रीडायरेक्ट करें
    navigate('/list');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Tags:</strong> {data.tags}</p>
      <p><strong>Start Date:</strong> {data.startDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ViewPage;
