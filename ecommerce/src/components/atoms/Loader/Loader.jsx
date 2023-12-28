import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <p className="loading-text">Cargando...</p>
      <div className="loader"></div>
    </div>
  );
}

export default Loader