import React from 'react';
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div className="d-flex justify-content-center .align-content-center mt-3">
      <img src={logo} alt="Logo" style={{ height: '150px' }} />
    </div>
  );
};

export default Header;