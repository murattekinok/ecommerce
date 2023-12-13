import React, { useState } from 'react';
import './styles.css'; // Make sure to import your CSS file

const ShoeList = () => {
  const [shoes, setShoes] = useState([
    { id: 1, name: 'Stylish Sneakers', category: 'Sneakers', price: 50, image: 'images/sneakers.png' },
    { id: 2, name: 'Classic Boots', category: 'Boots', price: 80, image: 'images/boots.png' },
    { id: 3, name: 'Casual Sandals', category: 'Sandals', price: 30, image: 'images/sandals.png' },
    // Add more shoes as needed
  ]);

  const [formData, setFormData] = useState({ name: '', category: '', price: '', image: '' });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editShoeId, setEditShoeId] = useState(null);

  const handleAddShoe = () => {
    const newShoe = {
      id: shoes.length + 1,
      ...formData,
    };

    setShoes([...shoes, newShoe]);
    setFormData({ name: '', category: '', price: '', image: '' });
  };

  const handleDeleteShoe = (shoeId) => {
    const updatedShoes = shoes.filter((shoe) => shoe.id !== shoeId);
    setShoes(updatedShoes);
  };

  const handleEditShoe = (shoeId) => {
    setIsEditMode(true);
    setEditShoeId(shoeId);

    const selectedShoe = shoes.find((shoe) => shoe.id === shoeId);
    setFormData({ ...selectedShoe });
  };

  const handleSaveShoe = () => {
    const updatedShoes = shoes.map((shoe) => (shoe.id === editShoeId ? { ...shoe, ...formData } : shoe));

    setShoes(updatedShoes);
    setIsEditMode(false);
    setEditShoeId(null);
    setFormData({ name: '', category: '', price: '', image: '' });
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setEditShoeId(null);
    setFormData({ name: '', category: '', price: '', image: '' });
  };

  return (
    <>
      <h1>Shoe List</h1>

      <div>
        <h2>Add New Shoe</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </label>
          <button onClick={handleAddShoe}>Add Shoe</button>
        </form>
      </div>

      <div>
        <h2>Shoe List</h2>
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            {isEditMode && editShoeId === shoe.id ? (
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label>
                  Category:
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </label>
                <label>
                  Price:
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </label>
                <label>
                  Image URL:
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </label>
                <button onClick={handleSaveShoe}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <>
                <img src={shoe.image} alt={shoe.name} />
                <p>Name: {shoe.name}</p>
                <p>Category: {shoe.category}</p>
                <p>Price: ${shoe.price}</p>
                <button onClick={() => handleEditShoe(shoe.id)}>Edit</button>
                <button onClick={() => handleDeleteShoe(shoe.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoeList;
