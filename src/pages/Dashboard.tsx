import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Package, Users, TrendingUp, AlertTriangle, Clock, CheckCircle, Truck } from 'lucide-react';
export const Dashboard: React.FC = () => {
  const {
    user
  } = useAuth();
  const isManager = user?.role === 'manager';
  // Mock data for dashboard
  const stats = {
    totalOrders: 124,
    pendingOrders: 28,
    lowStockItems: 5,
    newCustomers: isManager ? 12 : 4,
    revenue: isManager ? 24650 : null,
    completedOrders: 96,
    delayedOrders: 3,
    upcomingDeliveries: 15
  };
  // Mock recent orders
  const recentOrders = [{
    id: 'ORD-1234',
    customer: 'Acme Sports Club',
    product: 'Team Jersey',
    quantity: 25,
    status: 'In Production',
    due: '2023-07-25'
  }, {
    id: 'ORD-1233',
    customer: 'Local High School',
    product: 'Uniform Set',
    quantity: 30,
    status: 'Pending',
    due: '2023-07-28'
  }, {
    id: 'ORD-1232',
    customer: 'Corporate Solutions',
    product: 'Polo Shirts',
    quantity: 50,
    status: 'Delivered',
    due: '2023-07-20'
  }, {
    id: 'ORD-1231',
    customer: 'Fitness Center',
    product: 'T-Shirts',
    quantity: 40,
    status: 'Shipped',
    due: '2023-07-22'
  }, {
    id: 'ORD-1230',
    customer: 'Community Center',
    product: 'Event Shirts',
    quantity: 100,
    status: 'Pending',
    due: '2023-07-30'
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
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your orders today.
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <ShoppingBag size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="text-xl font-semibold text-gray-900">
                {stats.totalOrders}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Clock size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Pending Orders
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {stats.pendingOrders}
              </p>
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
                {stats.lowStockItems}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Users size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">New Customers</p>
              <p className="text-xl font-semibold text-gray-900">
                {stats.newCustomers}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Stats for Managers */}
      {isManager && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <TrendingUp size={20} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Monthly Revenue
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  ${stats.revenue}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <CheckCircle size={20} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Completed Orders
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  {stats.completedOrders}
                </p>
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
                  Delayed Orders
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  {stats.delayedOrders}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Truck size={20} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Upcoming Deliveries
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  {stats.upcomingDeliveries}
                </p>
              </div>
            </div>
          </div>
        </div>}
      {/* Recent Orders */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map(order => <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    {order.id}
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
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <a href="/orders" className="text-sm font-medium text-primary hover:text-primary-700">
            View all orders →
          </a>
        </div>
      </div>
    </div>;
};