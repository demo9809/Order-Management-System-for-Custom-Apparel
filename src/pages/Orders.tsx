import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
export const Orders: React.FC = () => {
  const {
    user
  } = useAuth();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortColumn, setSortColumn] = useState<string | null>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [searchQuery, setSearchQuery] = useState('');
  // Mock data for orders
  const orders = [{
    id: 'ORD-1234',
    customer: 'Acme Sports Club',
    product: 'Team Jersey',
    quantity: 25,
    status: 'In Production',
    due: '2023-07-25',
    agent: 'Sarah Agent'
  }, {
    id: 'ORD-1233',
    customer: 'Local High School',
    product: 'Uniform Set',
    quantity: 30,
    status: 'Pending',
    due: '2023-07-28',
    agent: 'Mark Wilson'
  }, {
    id: 'ORD-1232',
    customer: 'Corporate Solutions',
    product: 'Polo Shirts',
    quantity: 50,
    status: 'Delivered',
    due: '2023-07-20',
    agent: 'Sarah Agent'
  }, {
    id: 'ORD-1231',
    customer: 'Fitness Center',
    product: 'T-Shirts',
    quantity: 40,
    status: 'Shipped',
    due: '2023-07-22',
    agent: 'John Davis'
  }, {
    id: 'ORD-1230',
    customer: 'Community Center',
    product: 'Event Shirts',
    quantity: 100,
    status: 'Pending',
    due: '2023-07-30',
    agent: 'Mark Wilson'
  }, {
    id: 'ORD-1229',
    customer: 'Tech Startup',
    product: 'Branded Hoodies',
    quantity: 20,
    status: 'In Production',
    due: '2023-07-26',
    agent: 'Sarah Agent'
  }, {
    id: 'ORD-1228',
    customer: 'Local Restaurant',
    product: 'Staff T-Shirts',
    quantity: 15,
    status: 'Delivered',
    due: '2023-07-19',
    agent: 'John Davis'
  }, {
    id: 'ORD-1227',
    customer: 'Dance Studio',
    product: 'Performance Outfits',
    quantity: 35,
    status: 'Shipped',
    due: '2023-07-23',
    agent: 'Sarah Agent'
  }, {
    id: 'ORD-1226',
    customer: 'Youth League',
    product: 'Team Uniforms',
    quantity: 60,
    status: 'Pending',
    due: '2023-07-29',
    agent: 'Mark Wilson'
  }, {
    id: 'ORD-1225',
    customer: 'Charity Run',
    product: 'Event T-Shirts',
    quantity: 200,
    status: 'In Production',
    due: '2023-07-27',
    agent: 'John Davis'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Production':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const sortedOrders = [...orders].sort((a: any, b: any) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortColumn] > b[sortColumn]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });
  const filteredOrders = sortedOrders.filter(order => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return order.id.toLowerCase().includes(query) || order.customer.toLowerCase().includes(query) || order.product.toLowerCase().includes(query) || order.status.toLowerCase().includes(query);
  });
  const SortIndicator = ({
    column
  }: {
    column: string;
  }) => {
    if (sortColumn !== column) return null;
    return sortDirection === 'asc' ? <ChevronUp className="inline-block w-4 h-4" /> : <ChevronDown className="inline-block w-4 h-4" />;
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <Link to="/orders/new" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          New Order
        </Link>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search orders..." className="pl-10 w-full rounded-md border border-gray-300 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        {filterOpen && <div className="px-6 py-4 border-b border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in_production">In Production</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Any Date</option>
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="next_week">Next Week</option>
                <option value="this_month">This Month</option>
              </select>
            </div>
            {user?.role === 'manager' && <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent
                </label>
                <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                  <option value="">All Agents</option>
                  <option value="sarah">Sarah Agent</option>
                  <option value="mark">Mark Wilson</option>
                  <option value="john">John Davis</option>
                </select>
              </div>}
          </div>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('id')}>
                  Order ID <SortIndicator column="id" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('customer')}>
                  Customer <SortIndicator column="customer" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('product')}>
                  Product <SortIndicator column="product" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('quantity')}>
                  Quantity <SortIndicator column="quantity" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('status')}>
                  Status <SortIndicator column="status" />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('due')}>
                  Due Date <SortIndicator column="due" />
                </th>
                {user?.role === 'manager' && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('agent')}>
                    Agent <SortIndicator column="agent" />
                  </th>}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`/orders/${order.id}`} className="text-primary hover:text-primary-700">
                      {order.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.due}
                  </td>
                  {user?.role === 'manager' && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.agent}
                    </td>}
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">42</span> orders
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
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                5
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