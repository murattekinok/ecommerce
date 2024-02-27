import React from 'react';

const Features = () => {
  return (
    <div>
      <h1>Product Gallery</h1>
      <div className="product-gallery">
        {/* Ürünlerin galeri olarak listelendiği bir yapı */}
        <div className="product">
          <img src="ürün1.jpg" alt="Ürün 1" />
          <h2>Ürün 1</h2>
          <p>Açıklama: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="product">
          <img src="ürün2.jpg" alt="Ürün 2" />
          <h2>Ürün 2</h2>
          <p>Açıklama: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Diğer ürünlerin burada listelendiği bir yapı */}
      </div>
    </div>
  );
};

export default Features;
