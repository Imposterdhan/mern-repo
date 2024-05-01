import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Crousel from '../components/Crousel';

export default function Home() {
  

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
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
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridGap: '20px' }}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
