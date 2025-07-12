import React from 'react';

function Footer({ name }) {
  return (
    <footer className="bg-white mt-12 py-6">
      <div className="container mx-auto text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with React & Spring Boot</p>
      </div>
    </footer>
  );
}

export default Footer;