import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">Bluestock IPOs</h1>
      <div>
        <a href="/" className="mr-4">Home</a>
        <a href="/admin">Admin</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
