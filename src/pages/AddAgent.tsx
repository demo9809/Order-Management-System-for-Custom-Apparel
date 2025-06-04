import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
interface AgentForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  status: 'active' | 'inactive';
}
export const AddAgent: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AgentForm>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    status: 'active'
  });
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear errors when user types
    if (name === 'password' || name === 'confirmPassword') {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  const validateForm = () => {
    const newErrors = {
      password: '',
      confirmPassword: ''
    };
    let isValid = true;
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Agent added:', formData);
      navigate('/agents');
    }
  };
  return <div>
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/agents')} className="mr-4 p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Add New Agent</h1>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Agent Information
              </h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Account Credentials
              </h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password*
              </label>
              <input type="password" name="password" required value={formData.password} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              <p className="mt-1 text-sm text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password*
              </label>
              <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>}
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
            <button type="button" onClick={() => navigate('/agents')} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 mr-3">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
              <Save className="w-4 h-4 mr-2" />
              Add Agent
            </button>
          </div>
        </form>
      </div>
    </div>;
};