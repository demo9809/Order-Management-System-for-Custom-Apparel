import React, { useState } from 'react';
import { Save, Upload } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ProductConfigurationPanel } from '../components/settings/ProductConfigurationPanel';
export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [formData, setFormData] = useState({
    companyName: 'CustomThreads',
    phone: '555-123-4567',
    email: 'info@customthreads.com',
    address: '123 Apparel St, Fabricville, TX 75001',
    website: 'www.customthreads.com',
    taxId: '12-3456789',
    orderPrefix: 'ORD-',
    invoicePrefix: 'INV-',
    defaultTax: '8.25',
    lowStockThreshold: '15',
    logo: 'https://placehold.co/400x100/4F46E5/FFFFFF?text=CustomThreads'
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save settings logic would go here
    alert('Settings saved successfully!');
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your system configuration and preferences.
        </p>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select id="tabs" name="tabs" className="block w-full focus:ring-primary focus:border-primary border-gray-300 rounded-md" value={activeTab} onChange={e => setActiveTab(e.target.value)}>
            <option value="company">Company Information</option>
            <option value="system">System Preferences</option>
            <option value="users">User Management</option>
            <option value="notifications">Notifications</option>
            <option value="products">Product Configuration</option>
          </select>
        </div>
        <div className="hidden sm:block border-b border-gray-200">
          <nav className="flex -mb-px">
            <button onClick={() => setActiveTab('company')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'company' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Company Information
            </button>
            <button onClick={() => setActiveTab('system')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'system' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              System Preferences
            </button>
            <button onClick={() => setActiveTab('users')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'users' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              User Management
            </button>
            <button onClick={() => setActiveTab('notifications')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'notifications' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Notifications
            </button>
            <button onClick={() => setActiveTab('products')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'products' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Product Configuration
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'company' && <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Company Information
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    This information will be displayed on your invoices and
                    other documents.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Address
                  </label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax ID / Business Number
                  </label>
                  <input type="text" name="taxId" value={formData.taxId} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Logo
                  </label>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <img src={formData.logo} alt="Company Logo" className="h-16 w-auto border rounded-md" />
                    </div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md flex-grow">
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
                          PNG, JPG, GIF up to 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </form>}
          {activeTab === 'system' && <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    System Preferences
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Configure system-wide settings and defaults.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order ID Prefix
                  </label>
                  <input type="text" name="orderPrefix" value={formData.orderPrefix} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                  <p className="mt-1 text-sm text-gray-500">
                    Example: {formData.orderPrefix}1234
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Invoice ID Prefix
                  </label>
                  <input type="text" name="invoicePrefix" value={formData.invoicePrefix} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                  <p className="mt-1 text-sm text-gray-500">
                    Example: {formData.invoicePrefix}1234
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Default Tax Rate (%)
                  </label>
                  <input type="number" name="defaultTax" min="0" max="100" step="0.01" value={formData.defaultTax} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Low Stock Threshold
                  </label>
                  <input type="number" name="lowStockThreshold" min="0" value={formData.lowStockThreshold} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                  <p className="mt-1 text-sm text-gray-500">
                    Items with stock below this number will trigger alerts
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Order Status
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input id="status-pending" name="defaultStatus" type="radio" value="pending" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                      <label htmlFor="status-pending" className="ml-2 block text-sm text-gray-900">
                        Pending
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="status-approved" name="defaultStatus" type="radio" value="approved" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                      <label htmlFor="status-approved" className="ml-2 block text-sm text-gray-900">
                        Approved
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    System Theme
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input id="theme-light" name="theme" type="radio" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                      <label htmlFor="theme-light" className="ml-2 block text-sm text-gray-900">
                        Light
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="theme-dark" name="theme" type="radio" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                      <label htmlFor="theme-dark" className="ml-2 block text-sm text-gray-900">
                        Dark
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="theme-system" name="theme" type="radio" className="h-4 w-4 text-primary focus:ring-primary border-gray-300" />
                      <label htmlFor="theme-system" className="ml-2 block text-sm text-gray-900">
                        System Default
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </form>}
          {activeTab === 'users' && <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    User Management
                  </h2>
                  <p className="text-sm text-gray-600">
                    Manage user accounts and permissions.
                  </p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </button>
              </div>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Login
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        John Manager
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        manager@customthreads.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Manager
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2023-07-18 09:45
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-primary hover:text-primary-700 mr-4">
                          Edit
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Deactivate
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sarah Agent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        agent@customthreads.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Agent
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2023-07-18 10:12
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-primary hover:text-primary-700 mr-4">
                          Edit
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Deactivate
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mark Wilson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        mark@customthreads.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Agent
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2023-07-18 08:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-primary hover:text-primary-700 mr-4">
                          Edit
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Deactivate
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>}
          {activeTab === 'notifications' && <form onSubmit={handleSubmit}>
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Notification Preferences
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Configure when and how you receive system notifications.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-3">
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-new-order" name="email-new-order" type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-new-order" className="font-medium text-gray-700">
                            New Order
                          </label>
                          <p className="text-gray-500">
                            Receive an email when a new order is created
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-low-stock" name="email-low-stock" type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-low-stock" className="font-medium text-gray-700">
                            Low Stock Alert
                          </label>
                          <p className="text-gray-500">
                            Receive an email when inventory items fall below
                            minimum threshold
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="email-due-delivery" name="email-due-delivery" type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="email-due-delivery" className="font-medium text-gray-700">
                            Delivery Due
                          </label>
                          <p className="text-gray-500">
                            Receive an email when orders are due for delivery
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-3">
                      System Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="system-order-status" name="system-order-status" type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="system-order-status" className="font-medium text-gray-700">
                            Order Status Changes
                          </label>
                          <p className="text-gray-500">
                            Show notifications when order status changes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="system-new-customer" name="system-new-customer" type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="system-new-customer" className="font-medium text-gray-700">
                            New Customers
                          </label>
                          <p className="text-gray-500">
                            Show notifications when new customers are added
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="system-agent-activity" name="system-agent-activity" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="system-agent-activity" className="font-medium text-gray-700">
                            Agent Activity
                          </label>
                          <p className="text-gray-500">
                            Show notifications for agent logins and activities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-3">
                      Daily Digest
                    </h3>
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Send daily summary at:
                      </label>
                      <select className="w-full sm:w-auto rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                        <option value="8:00">8:00 AM</option>
                        <option value="9:00" selected>
                          9:00 AM
                        </option>
                        <option value="10:00">10:00 AM</option>
                        <option value="off">Don't send</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </button>
              </div>
            </form>}
          {activeTab === 'products' && <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Product Configuration
                  </h2>
                  <p className="text-sm text-gray-600">
                    Manage product types, colors, and sizes available in the
                    system.
                  </p>
                </div>
              </div>
              <ProductConfigurationPanel onSave={() => alert('Configuration saved!')} />
            </div>}
        </div>
      </div>
    </div>;
};