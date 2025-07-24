import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IPOCard from '../components/IPOCard';

const UpcomingIPOs = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/ipos/')
      .then(response => setIpos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming IPOs</h1>
      {ipos.map(ipo => <IPOCard key={ipo.id} ipo={ipo} />)}
    </div>
  );
};

export default UpcomingIPOs;
