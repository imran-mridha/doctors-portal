import React from 'react';

const PrimiaryButton = ({children}) => {
  return (
    <button 
        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
  );
};

export default PrimiaryButton;