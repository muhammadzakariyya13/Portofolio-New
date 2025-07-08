import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 text-center">
      <div className="container">
        <p className="mb-0">© {currentYear} Muhammad Zakariyya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
