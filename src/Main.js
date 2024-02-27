import React from 'react';

const Main = () => {
  return (
    <section className="content">
      <h2>Welcome to Our E-Commerce Website</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac feugiat purus. Curabitur convallis massa nec vestibulum. Nam eget urna vehicula, facilisis massa eu, fermentum libero. Donec dignissim bibendum felis, ac vestibulum enim malesuada eget.</p>

      <h3>Our Products</h3>
      <p>Check out our wide range of products. We offer the best quality and great deals on all items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <h3>Why Choose Us?</h3>
      <p>We take pride in our excellent customer service and high-quality products. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada bibendum arcu, nec bibendum tortor cursus eu.</p>

      <form id="subscriptionForm">
        <label>
          Email:
          <input type="email" id="emailInput" required />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Main;
