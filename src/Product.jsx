import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [variants, setVariants] = useState([
    { size: 'Small', color: 'Red', price: 345, available: 20 },
    { size: 'Small', color: 'Blue', price: 345, available: 20 },
    { size: 'Medium', color: 'Red', price: 45, available: 20 },
    { size: 'Medium', color: 'Blue', price: 23, available: 20 },
  ]);
  const [groupBy, setGroupBy] = useState('size');
  const navigate = useNavigate();

  const handleSave = () => {
    localStorage.setItem('variants', JSON.stringify(variants));
    navigate('/save');
  };

  const groupedVariants = variants.reduce((acc, variant) => {
    const key = variant[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(variant);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product</h1>
      <div className="border border-gray-300 rounded p-4">
        <div className="mb-4">
          <label className="mr-2 font-semibold">Group by:</label>
          <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)} className="border rounded p-2">
            <option value="size">Size</option>
            <option value="color">Color</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          {Object.entries(groupedVariants).map(([key, group]) => (
            <div key={key} className="mb-4">
              <h2 className="text-lg font-semibold mb-2">{groupBy.charAt(0).toUpperCase() + groupBy.slice(1)}: {key}</h2>
              <table className="w-full mb-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Size</th>
                    <th className="px-4 py-2">Color</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Available</th>
                  </tr>
                </thead>
                <tbody>
                  {group.map((variant, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="px-4 py-2">{variant.size}</td>
                      <td className="px-4 py-2">{variant.color}</td>
                      <td className="px-4 py-2">${variant.price}</td>
                      <td className="px-4 py-2">{variant.available}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
