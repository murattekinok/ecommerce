const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json()); // JSON body parser

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/users', require('./routes/users')); // User routes

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// addToCart fonksiyonu
function addToCart(productName, productPrice) {
    // Gerçek bir alışveriş sepeti nesnesi oluşturulur
    const shoppingCart = {
        items: [],
        totalPrice: 0,
        addItem: function(productName, productPrice) {
            this.items.push({ name: productName, price: productPrice });
            this.totalPrice += productPrice;
        },
        removeItem: function(productName, productPrice) {
            const index = this.items.findIndex(item => item.name === productName);
            if (index !== -1) {
                this.items.splice(index, 1);
                this.totalPrice -= productPrice;
            }
        },
        checkout: function() {
            // Sepetin içeriği bir veritabanına kaydedilebilir veya başka bir işlem yapılabilir
            console.log("Checkout completed. Thank you for your purchase!");
        }
    };

    // Ürün sepete eklenir
    shoppingCart.addItem(productName, productPrice);

    // Sepetin içeriği ve toplam fiyat konsola yazdırılır (geçici olarak)
    console.log(`${productName} added to cart. Price: $${productPrice}`);
    console.log("Shopping Cart Contents:", shoppingCart.items);
    console.log("Total Price:", shoppingCart.totalPrice);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Server listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
