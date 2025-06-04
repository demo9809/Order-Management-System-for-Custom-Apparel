import React, { useState } from 'react';
import { Search, Filter, Plus, User } from 'lucide-react';
export const Customers: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  // Mock customers data
  const customers = [{
    id: 1,
    name: 'Acme Sports Club',
    contact: 'John Smith',
    phone: '555-123-4567',
    email: 'contact@acmesports.com',
    address: '123 Main St, Anytown, USA',
    orders: 5,
    lastOrder: '2023-06-30'
  }, {
    id: 2,
    name: 'Local High School',
    contact: 'Mary Johnson',
    phone: '555-234-5678',
    email: 'mjohnson@localhigh.edu',
    address: '456 School Ave, Anytown, USA',
    orders: 3,
    lastOrder: '2023-06-25'
  }, {
    id: 3,
    name: 'Corporate Solutions',
    contact: 'Robert Brown',
    phone: '555-345-6789',
    email: 'rbrown@corpsolutions.com',
    address: '789 Business Blvd, Anytown, USA',
    orders: 8,
    lastOrder: '2023-07-10'
  }, {
    id: 4,
    name: 'Fitness Center',
    contact: 'Sarah Wilson',
    phone: '555-456-7890',
    email: 'swilson@fitnesscenter.com',
    address: '101 Health Dr, Anytown, USA',
    orders: 4,
    lastOrder: '2023-07-05'
  }, {
    id: 5,
    name: 'Community Center',
    contact: 'David Lee',
    phone: '555-567-8901',
    email: 'dlee@communitycenter.org',
    address: '202 Public St, Anytown, USA',
    orders: 2,
    lastOrder: '2023-06-15'
  }, {
    id: 6,
    name: 'Tech Startup',
    contact: 'Emily Chen',
    phone: '555-678-9012',
    email: 'echen@techstartup.io',
    address: '303 Innovation Way, Anytown, USA',
    orders: 1,
    lastOrder: '2023-07-12'
  }, {
    id: 7,
    name: 'Local Restaurant',
    contact: 'Michael Garcia',
    phone: '555-789-0123',
    email: 'mgarcia@localeatery.com',
    address: '404 Cuisine St, Anytown, USA',
    orders: 3,
    lastOrder: '2023-06-28'
  }, {
    id: 8,
    name: 'Dance Studio',
    contact: 'Jessica Taylor',
    phone: '555-890-1234',
    email: 'jtaylor@dancestudio.com',
    address: '505 Arts Blvd, Anytown, USA',
    orders: 6,
    lastOrder: '2023-07-08'
  }, {
    id: 9,
    name: 'Youth League',
    contact: 'Andrew Martinez',
    phone: '555-901-2345',
    email: 'amartinez@youthleague.org',
    address: '606 Sports Field Rd, Anytown, USA',
    orders: 12,
    lastOrder: '2023-07-15'
  }, {
    id: 10,
    name: 'Charity Run',
    contact: 'Lisa Anderson',
    phone: '555-012-3456',
    email: 'landerson@charityrun.org',
    address: '707 Marathon Ave, Anytown, USA',
    orders: 1,
    lastOrder: '2023-06-20'
  }];
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <User size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Customers
              </p>
              <p className="text-xl font-semibold text-gray-900">10</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <User size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                New This Month
              </p>
              <p className="text-xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <User size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Repeat Customers
              </p>
              <p className="text-xl font-semibold text-gray-900">7</p>
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
            <input type="text" placeholder="Search customers..." className="pl-10 w-full rounded-md border border-gray-300 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        {filterOpen && <div className="px-6 py-4 border-b border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Orders
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Any</option>
                <option value="none">No Orders</option>
                <option value="1-5">1-5 Orders</option>
                <option value="5+">5+ Orders</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Order
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Any Time</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="this_year">This Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Type
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Types</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
                <option value="school">School</option>
                <option value="sports">Sports Team</option>
              </select>
            </div>
          </div>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Person
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Order
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map(customer => <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.contact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{customer.phone}</div>
                    <div>{customer.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastOrder}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">10</span> customers
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