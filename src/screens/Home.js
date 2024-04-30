import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Crousel from '../components/Crousel';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setFoodItem(data.food_items);
      setFoodCat(data.food_Category);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Crousel />
      <div className='container'>
        {
          foodCat.length > 0
          ? foodCat.map((category, index) => (
            <div key={index}>{category.CategoryName}</div>
          ))
          : <div>No categories found</div>
        }
        <Card />
      </div>
      <Footer />
    </div>
  );
}
