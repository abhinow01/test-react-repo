import React, { useEffect, useState } from 'react';

const SavedData = () => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    const savedVariants = JSON.parse(localStorage.getItem('variants')) || [];
    setVariants(savedVariants);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Data</h1>
      <div className="border border-gray-300 rounded p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Color</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Available</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2">{variant.size}</td>
                <td className="px-4 py-2">{variant.color}</td>
                <td className="px-4 py-2">${variant.price}</td>
                <td className="px-4 py-2">{variant.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <p>
            Available: <span className="font-semibold">{variants.reduce((total, variant) => total + variant.available, 0)}</span>
          </p>
          <p>
            Price range: <span className="font-semibold">${Math.min(...variants.map(variant => variant.price))} - ${Math.max(...variants.map(variant => variant.price))}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedData;
