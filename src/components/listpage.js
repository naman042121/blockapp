import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('formDataList');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h2>Stored Data</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Tags:</strong> {item.tags}</p>
            <p><strong>Start Date:</strong> {item.startDate}</p>
            <Link to={`/view/${index}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
