import React, { useState } from 'react';
import { Search, Filter, Plus, UserCheck, TrendingUp, ShoppingBag, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const Agents: React.FC = () => {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  // Mock agents data
  const agents = [{
    id: 1,
    name: 'Sarah Agent',
    email: 'sarah@customthreads.com',
    phone: '555-123-4567',
    status: 'Active',
    ordersCreated: 45,
    ordersCompleted: 38,
    revenue: 12500,
    lastActive: '2023-07-18'
  }, {
    id: 2,
    name: 'Mark Wilson',
    email: 'mark@customthreads.com',
    phone: '555-234-5678',
    status: 'Active',
    ordersCreated: 37,
    ordersCompleted: 30,
    revenue: 9800,
    lastActive: '2023-07-18'
  }, {
    id: 3,
    name: 'John Davis',
    email: 'john@customthreads.com',
    phone: '555-345-6789',
    status: 'Active',
    ordersCreated: 52,
    ordersCompleted: 48,
    revenue: 15600,
    lastActive: '2023-07-17'
  }, {
    id: 4,
    name: 'Emily Johnson',
    email: 'emily@customthreads.com',
    phone: '555-456-7890',
    status: 'Inactive',
    ordersCreated: 28,
    ordersCompleted: 25,
    revenue: 7800,
    lastActive: '2023-06-30'
  }, {
    id: 5,
    name: 'Michael Brown',
    email: 'michael@customthreads.com',
    phone: '555-567-8901',
    status: 'Active',
    ordersCreated: 41,
    ordersCompleted: 36,
    revenue: 11200,
    lastActive: '2023-07-18'
  }];
  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };
  // Calculate total stats
  const totalOrdersCreated = agents.reduce((sum, agent) => sum + agent.ordersCreated, 0);
  const totalOrdersCompleted = agents.reduce((sum, agent) => sum + agent.ordersCompleted, 0);
  const totalRevenue = agents.reduce((sum, agent) => sum + agent.revenue, 0);
  const activeAgents = agents.filter(agent => agent.status === 'Active').length;
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Agents</h1>
        <button onClick={() => navigate('/agents/add')} className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Agent
        </button>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <UserCheck size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Agents</p>
              <p className="text-xl font-semibold text-gray-900">
                {activeAgents}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <ShoppingBag size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Orders Created
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {totalOrdersCreated}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <CheckCircle size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Orders Completed
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {totalOrdersCompleted}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <TrendingUp size={20} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-xl font-semibold text-gray-900">
                ${totalRevenue}
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
            <input type="text" placeholder="Search agents..." className="pl-10 w-full rounded-md border border-gray-300 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
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
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Performance
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">All Performance</option>
                <option value="high">High Performers</option>
                <option value="medium">Medium Performers</option>
                <option value="low">Low Performers</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Active
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                <option value="">Any Time</option>
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
              </select>
            </div>
          </div>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders Created
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders Completed
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agents.map(agent => <tr key={agent.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    {agent.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{agent.email}</div>
                    <div>{agent.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(agent.status)}`}>
                      {agent.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {agent.ordersCreated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {agent.ordersCompleted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${agent.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {agent.lastActive}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};