import React from 'react';

const IPOCard = ({ ipo }) => (
  <div className="bg-white shadow-md rounded-xl p-4 mb-4">
    <h2 className="text-lg font-semibold">{ipo.name}</h2>
    <p>Date: {ipo.date}</p>
    <p>Price: ₹{ipo.price}</p>
    <p>Lot Size: {ipo.lot_size}</p>
    <p>Status: {ipo.status}</p>
  </div>
);

export default IPOCard;
