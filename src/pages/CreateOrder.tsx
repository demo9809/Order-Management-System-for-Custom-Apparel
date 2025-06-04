import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, Minus, Save } from 'lucide-react';
export const CreateOrder: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customer: '',
    phone: '',
    email: '',
    address: '',
    productType: '',
    color: '',
    neckType: '',
    eventDate: '',
    deliveryDate: '',
    specialInstructions: '',
    sizes: [{
      size: 'S',
      quantity: 0
    }, {
      size: 'M',
      quantity: 0
    }, {
      size: 'L',
      quantity: 0
    }, {
      size: 'XL',
      quantity: 0
    }, {
      size: 'XXL',
      quantity: 0
    }]
  });
  const productTypes = ['T-Shirt', 'Jersey', 'Polo Shirt', 'Uniform'];
  const colors = ['White', 'Black', 'Red', 'Blue', 'Green', 'Yellow'];
  const neckTypes = ['Round', 'V-Neck', 'Polo', 'Crew'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSizeChange = (index: number, quantity: number) => {
    const newSizes = [...formData.sizes];
    newSizes[index].quantity = Math.max(0, quantity);
    setFormData({
      ...formData,
      sizes: newSizes
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to the backend
    console.log('Order submitted:', formData);
    // Navigate back to orders list
    navigate('/orders');
  };
  const totalQuantity = formData.sizes.reduce((sum, size) => sum + size.quantity, 0);
  return <div>
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/orders')} className="mr-4 p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Customer Information
              </h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name*
              </label>
              <input type="text" name="customer" required value={formData.customer} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div className="col-span-1 md:col-span-2 border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Product Information
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
                Neck Type
              </label>
              <select name="neckType" value={formData.neckType} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Select neck type</option>
                {neckTypes.map(type => <option key={type} value={type}>
                    {type}
                  </option>)}
              </select>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sizes and Quantities*
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {formData.sizes.map((sizeItem, index) => <div key={sizeItem.size} className="border rounded-md p-3">
                    <div className="font-medium text-center mb-2">
                      {sizeItem.size}
                    </div>
                    <div className="flex items-center justify-between">
                      <button type="button" onClick={() => handleSizeChange(index, sizeItem.quantity - 1)} className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                        <Minus size={16} />
                      </button>
                      <span className="mx-2 w-8 text-center">
                        {sizeItem.quantity}
                      </span>
                      <button type="button" onClick={() => handleSizeChange(index, sizeItem.quantity + 1)} className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>)}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Total quantity: {totalQuantity}
              </div>
              {totalQuantity === 0 && <div className="mt-1 text-sm text-red-600">
                  Please select at least one item
                </div>}
            </div>
            <div className="col-span-1 md:col-span-2 border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Additional Information
              </h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Date
              </label>
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Date*
              </label>
              <input type="date" name="deliveryDate" required value={formData.deliveryDate} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Instructions
              </label>
              <textarea name="specialInstructions" rows={3} value={formData.specialInstructions} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Logo (optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-700">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
            <button type="button" onClick={() => navigate('/orders')} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 mr-3">
              Cancel
            </button>
            <button type="submit" disabled={totalQuantity === 0} className={`px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors ${totalQuantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <Save className="w-4 h-4 mr-2" />
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>;
};