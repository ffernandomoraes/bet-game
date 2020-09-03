import React from 'react';
import './styles.scss';

const Loader = ({ text }) => (
  <div className='loader'>
    <h3>{text}</h3>
  </div>
);

export default Loader;
