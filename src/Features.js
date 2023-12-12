import React from 'react';

const Features = () => {
  return (
<div>
    <h1>Product Gallery</h1>

    <a href="#" id="logo-container">
        <img src="images/logo.png" alt="Logo" id="logo">
    </a>

    <div id="buttons">
        <button id="showAllButton">Show All</button>
        <button id="sneakersButton">Sneakers</button>
        <button id="bootsButton">Boots</button>
        <button id="sandalsButton">Sandals</button>
        <button id="sortByNameButton">Sort by Name</button>
        <button id="sortByPriceButton">Sort by Price</button>
    </div>

    <section class="content">
        <h2>Welcome to Our E-Commerce Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac feugiat purus. Curabitur convallis massa nec vestibulum. Nam eget urna vehicula, facilisis massa eu, fermentum libero. Donec dignissim bibendum felis, ac vestibulum enim malesuada eget.</p>

        <h3>Our Products</h3>
        <p>Check out our wide range of products. We offer the best quality and great deals on all items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h3>Why Choose Us?</h3>
        <p>We take pride in our excellent customer service and high-quality products. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada bibendum arcu, nec bibendum tortor cursus eu.</p>
    </section>

    <div id="gallery">
        <!-- Products will be displayed here -->
        <div class="product-card">
            <img src="images\sneakers.png" alt="Stylish Sneakers">
            <h2>Stylish Sneakers</h2>
            <p>Category: Sneakers</p>
            <p>Price: $50</p>
            <button onclick="addToCart('Stylish Sneakers', 50)">Add to Cart</button>
        </div>
        <div class="product-card">
            <img src="images/boots.png" alt="Classic Boots">
            <h2>Classic Boots</h2>
            <p>Category: Boots</p>
            <p>Price: $80</p>
            <button onclick="addToCart('Classic Boots', 80)">Add to Cart</button>
        </div>
        <div class="product-card">
            <img src="images/sandals.png" alt="Casual Sandals">
            <h2>Casual Sandals</h2>
            <p>Category: Sandals</p>
            <p>Price: $30</p>
            <button onclick="addToCart('Casual Sandals', 30)">Add to Cart</button>
        </div>
    </div>

  
    <script>
        const products = [
            { name: 'Stylish Sneakers', category: 'Sneakers', price: 50, image:"images/sneakers.png" },
            { name: 'Classic Boots', category: 'Boots', price: 59.99, image:"boots.png" },
            { name: 'Casual Sandals', category: 'Sandals', price: 110, image:"images/sandals.png" },
        ];

        function displayProducts(productsArray) {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; // Clears the existing content

            productsArray.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Category: ${product.category}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                `;
                gallery.appendChild(productCard);
            });
        }

        function addToCart(productName, productPrice) {
            // Burada sepet işlemleri gerçekleştirilebilir
            console.log(`${productName} added to cart. Price: $${productPrice}`);
        }

        displayProducts(products);

        const showAllButton = document.getElementById('showAllButton');
        showAllButton.addEventListener('click', () => {
            displayProducts(products);
        });

        const sneakersButton = document.getElementById('sneakersButton');
        sneakersButton.addEventListener('click', () => {
            const sneakers = products.filter(product => product.category === 'Sneakers');
            displayProducts(sneakers);
        });

        const bootsButton = document.getElementById('bootsButton');
        bootsButton.addEventListener('click', () => {
            const boots = products.filter(product => product.category === 'Boots');
            displayProducts(boots);
        });

        const sandalsButton = document.getElementById('sandalsButton');
        sandalsButton.addEventListener('click', () => {
            const sandals = products.filter(product => product.category === 'Sandals');
            displayProducts(sandals);
        });

        const sortByNameButton = document.getElementById('sortByNameButton');
        sortByNameButton.addEventListener('click', () => {
            const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
            displayProducts(sortedProducts);
        });

        const sortByPriceButton = document.getElementById('sortByPriceButton');
        sortByPriceButton.addEventListener('click', () => {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            displayProducts(sortedProducts);
        });
    </script>
</div>
  );
};

export default Features;