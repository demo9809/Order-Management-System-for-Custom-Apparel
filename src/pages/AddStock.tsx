import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
interface StockForm {
  productType: string;
  color: string;
  size: string;
  quantity: number;
  minStockLevel: number;
  location: string;
  notes: string;
}
export const AddStock: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<StockForm>({
    productType: '',
    color: '',
    size: '',
    quantity: 0,
    minStockLevel: 15,
    location: '',
    notes: ''
  });
  const productTypes = ['T-Shirt', 'Jersey', 'Polo Shirt', 'Uniform'];
  const colors = ['White', 'Black', 'Red', 'Blue', 'Green', 'Yellow'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' || name === 'minStockLevel' ? Number(value) : value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Stock added:', formData);
    navigate('/inventory');
  };
  return <div>
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/inventory')} className="mr-4 p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Add New Stock</h1>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Stock Details
              </h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Type*
              </label>
              <select name="productType" required value={formData.productType} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Select product type</option>
                {productTypes.map(type => <option key={type} value={type}>
                    {type}
                  </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color*
              </label>
              <select name="color" required value={formData.color} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Select color</option>
                {colors.map(color => <option key={color} value={color}>
                    {color}
                  </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size*
              </label>
              <select name="size" required value={formData.size} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Select size</option>
                {sizes.map(size => <option key={size} value={size}>
                    {size}
                  </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity*
              </label>
              <input type="number" name="quantity" required min="0" value={formData.quantity} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Stock Level*
              </label>
              <input type="number" name="minStockLevel" required min="0" value={formData.minStockLevel} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
              <p className="mt-1 text-sm text-gray-500">
                System will alert when stock falls below this level
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Storage Location
              </label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="e.g., Warehouse A, Shelf B3" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Any additional information about this stock"></textarea>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
            <button type="button" onClick={() => navigate('/inventory')} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 mr-3">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
              <Save className="w-4 h-4 mr-2" />
              Add Stock
            </button>
          </div>
        </form>
      </div>
    </div>;
};