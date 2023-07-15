import React from 'react';
import './App.css';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Granite Countertops',
    description: 'Beautiful and durable granite countertops for your kitchen.',
    imageUrl: '/images/countertops.jpg',
  },
  {
    id: 2,
    name: 'Granite Flooring',
    description: 'Elegant granite flooring options to enhance your home or office.',
    imageUrl: '/images/flooring.jpg',
  },
  {
    id: 3,
    name: 'Granite Tiles',
    description: 'Versatile granite tiles for various applications in your space.',
    imageUrl: '/images/tiles.jpg',
  },
  {
    id: 4,
    name: 'Granite Monuments',
    description: 'Monuements and other granite for peace of mind in your space.',
    imageUrl: '/images/monuments.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="top-image">
          <img src="/images/PRP Logo1.jpg" alt="Image 1" />
        </div>
        <h1>PRP EXPORTS</h1>
        <div className="bottom-image">
          <img src="/images/Periya Owner.jpg" alt="Image 2" />
          <h3 className="image-description">FOUNDER OF PRP GROUP</h3>
        </div>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Welcome to Granite Company! We are a leading provider of high-quality granite products for both residential and commercial projects. Our experienced team is dedicated to delivering exceptional craftsmanship and customer satisfaction.
          </p>
        </section>
        <section>
          <h2>Products</h2>
          <div className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            For inquiries or to schedule a consultation, please contact us at:
          </p>
          <p>Therkkutheru Village, Melur Taluk, Madurai - 625 122</p>
          <p>Email: info@prpexports.com</p>
          <p>Phone: 0452 - 2420345, 2420346, 2420347</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Granite Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
