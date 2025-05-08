import React from 'react';
import product from '../../components/product';

// Données temporaires des produits (à remplacer par une API ou une base de données)
const products = [
  {
    id: 1,
    name: 'Stérilisateur UV-C Pro',
    description: 'Stérilisateur professionnel à UV-C pour une désinfection efficace',
    price: 299.99,
    image: '/assets/img/products/steripro.jpg',
    type: 'UV-C'
  },
  {
    id: 2,
    name: 'Stérilisateur à Vapeur',
    description: 'Stérilisateur à vapeur haute température pour une désinfection complète',
    price: 199.99,
    image: '/assets/img/products/steripro-plus.jpg',
    type: 'Vapeur'
  },
  {
    id: 3,
    name: 'Stérilisateur UV-C Portable',
    description: 'Stérilisateur UV-C compact et portable pour une utilisation nomade',
    price: 149.99,
    image: '/assets/img/products/steritower.jpg',
    type: 'UV-C'
  }
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nos Stérilisateurs</h1>
      
      {/* Filtres par type */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Types de stérilisateurs</h2>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Tous
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            UV-C
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Vapeur
          </button>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 