import React, { useState } from 'react';
import { Search, Filter, Plus, Package, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const Inventory: React.FC = () => {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  // Mock inventory data
  const inventory = [{
    id: 1,
    name: 'T-Shirt',
    color: 'White',
    neckType: 'Round',
    size: 'S',
    inStock: 45,
    reserved: 15,
    available: 30,
    minStock: 20
  }, {
    id: 2,
    name: 'T-Shirt',
    color: 'White',
    neckType: 'Round',
    size: 'M',
    inStock: 60,
    reserved: 20,
    available: 40,
    minStock: 25
  }, {
    id: 3,
    name: 'T-Shirt',
    color: 'White',
    neckType: 'Round',
    size: 'L',
    inStock: 55,
    reserved: 25,
    available: 30,
    minStock: 25
  }, {
    id: 4,
    name: 'T-Shirt',
    color: 'Black',
    neckType: 'V-Neck',
    size: 'S',
    inStock: 35,
    reserved: 10,
    available: 25,
    minStock: 15
  }, {
    id: 5,
    name: 'T-Shirt',
    color: 'Black',
    neckType: 'V-Neck',
    size: 'M',
    inStock: 40,
    reserved: 15,
    available: 25,
    minStock: 20
  }, {
    id: 6,
    name: 'T-Shirt',
    color: 'Black',
    neckType: 'V-Neck',
    size: 'L',
    inStock: 45,
    reserved: 20,
    available: 25,
    minStock: 20
  }, {
    id: 7,
    name: 'Jersey',
    color: 'Red',
    neckType: 'Round',
    size: 'S',
    inStock: 25,
    reserved: 10,
    available: 15,
    minStock: 15
  }, {
    id: 8,
    name: 'Jersey',
    color: 'Red',
    neckType: 'Round',
    size: 'M',
    inStock: 30,
    reserved: 15,
    available: 15,
    minStock: 20
  }, {
    id: 9,
    name: 'Jersey',
    color: 'Red',
    neckType: 'Round',
    size: 'L',
    inStock: 35,
    reserved: 20,
    available: 15,
    minStock: 20
  }, {
    id: 10,
    name: 'Jersey',
    color: 'Blue',
    neckType: 'V-Neck',
    size: 'S',
    inStock: 10,
    reserved: 5,
    available: 5,
    minStock: 15
  }];
  // Mock low stock items
  const lowStockItems = inventory.filter(item => item.available <= item.minStock);
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Inventory Management
        </h1>
        <button onClick={() => navigate('/inventory/add')} className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Stock
        </button>
      </div>
      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-medium">Attention needed!</span>{' '}
                {lowStockItems.length} items are at or below minimum stock
                levels.
              </p>
            </div>
          </div>
        </div>}
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Package size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Items</p>
              <p className="text-xl font-semibold text-gray-900">10</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Package size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total In Stock
              </p>
              <p className="text-xl font-semibold text-gray-900">380</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Package size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Reserved</p>
              <p className="text-xl font-semibold text-gray-900">155</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <AlertTriangle size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Low Stock Items
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {lowStockItems.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search inventory..." className="pl-10 w-full rounded-md border border-gray-300 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        {filterOpen && <div className="px-6 py-4 border-b border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Type
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Products</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="jersey">Jersey</option>
                <option value="polo">Polo Shirt</option>
                <option value="uniform">Uniform</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Colors</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Sizes</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Status
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Status</option>
                <option value="low">Low Stock</option>
                <option value="normal">Normal Stock</option>
                <option value="high">High Stock</option>
              </select>
            </div>
          </div>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Neck Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Stock
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reserved
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Available
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map(item => <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.color}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.neckType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.inStock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.reserved}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.available}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.available <= item.minStock ? 'bg-red-100 text-red-800' : item.available <= item.minStock * 1.5 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {item.available <= item.minStock ? 'Low Stock' : item.available <= item.minStock * 1.5 ? 'Moderate' : 'Good'}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">24</span> items
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-current="page" className="z-10 bg-primary border-primary text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </a>
              <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                2
              </a>
              <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                3
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>;
};