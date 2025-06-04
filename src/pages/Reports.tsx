import React, { useState } from 'react';
import { BarChart2, PieChart, TrendingUp, Download, Calendar, Filter } from 'lucide-react';
export const Reports: React.FC = () => {
  const [reportType, setReportType] = useState('sales');
  const [dateRange, setDateRange] = useState('this_month');
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </button>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Report Type
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" value={reportType} onChange={e => setReportType(e.target.value)}>
                <option value="sales">Sales Report</option>
                <option value="inventory">Inventory Report</option>
                <option value="agent">Agent Performance</option>
                <option value="customer">Customer Analysis</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date Range
              </label>
              <select className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" value={dateRange} onChange={e => setDateRange(e.target.value)}>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
                <option value="this_quarter">This Quarter</option>
                <option value="this_year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            {dateRange === 'custom' && <div className="flex space-x-2 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    From
                  </label>
                  <input type="date" className="rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    To
                  </label>
                  <input type="date" className="rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
              </div>}
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>
      {reportType === 'sales' && <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Total Revenue
                </h3>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">$24,650</p>
              <p className="text-sm text-green-600 mt-2">
                ↑ 12% from last period
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Orders</h3>
                <BarChart2 className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">124</p>
              <p className="text-sm text-green-600 mt-2">
                ↑ 8% from last period
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Avg. Order Value
                </h3>
                <Calendar className="h-5 w-5 text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">$198.79</p>
              <p className="text-sm text-green-600 mt-2">
                ↑ 3% from last period
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Revenue by Product Type
              </h3>
              <div className="h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart2 className="h-16 w-16 mx-auto text-gray-300" />
                  <p className="mt-2">Chart visualization would appear here</p>
                  <p className="text-sm">
                    Showing revenue breakdown by product category
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Orders by Status
              </h3>
              <div className="h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <PieChart className="h-16 w-16 mx-auto text-gray-300" />
                  <p className="mt-2">Chart visualization would appear here</p>
                  <p className="text-sm">
                    Showing distribution of order statuses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Top Selling Products
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Units Sold
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      T-Shirt (White, Round Neck)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      42
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      520
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $7,800
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Jersey (Red, Round Neck)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      28
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      350
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $6,125
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Polo Shirt (Blue)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      23
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      230
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $4,600
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Uniform Set (School)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      15
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      180
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $3,960
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      T-Shirt (Black, V-Neck)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      16
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      160
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $2,400
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>}
      {reportType !== 'sales' && <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <div className="text-center text-gray-500">
            {reportType === 'inventory' && <Package className="h-16 w-16 mx-auto text-gray-300" />}
            {reportType === 'agent' && <UserCheck className="h-16 w-16 mx-auto text-gray-300" />}
            {reportType === 'customer' && <User className="h-16 w-16 mx-auto text-gray-300" />}
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              {reportType === 'inventory' && 'Inventory Report'}
              {reportType === 'agent' && 'Agent Performance Report'}
              {reportType === 'customer' && 'Customer Analysis Report'}
            </h3>
            <p className="mt-2">
              Select options and click "Generate Report" to view data
            </p>
            <button className="mt-6 px-4 py-2 bg-primary text-white rounded-md inline-flex items-center hover:bg-primary-700 transition-colors">
              <BarChart2 className="w-4 h-4 mr-2" />
              Generate Report
            </button>
          </div>
        </div>}
    </div>;
};