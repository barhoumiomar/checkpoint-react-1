// src/components/Image.js
import React from 'react';
import product from './product';
import picture from '../assets/product.jpg'
const Image = () => {
  return <img src={picture} alt={product.name} style={{ width: '40%' }} />;
};

export default Image;
