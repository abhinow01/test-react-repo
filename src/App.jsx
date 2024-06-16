import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './Product';
import SavedData from './SavedData';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="flex justify-center space-x-4 bg-gray-200 p-4">
            <li>
              <Link to="/product" className="text-blue-500 hover:text-blue-800">
                Product
              </Link>
            </li>
            <li>
              <Link to="/save" className="text-blue-500 hover:text-blue-800">
                Saved Data
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/save" element={<SavedData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
