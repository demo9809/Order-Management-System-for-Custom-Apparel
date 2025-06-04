import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Printer, FileText, Clock, CheckCircle, Truck, Package, AlertTriangle } from 'lucide-react';
export const OrderDetail: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  // Mock order data - in a real app this would be fetched from an API
  const order = {
    id: id,
    customer: 'Acme Sports Club',
    phone: '555-123-4567',
    email: 'contact@acmesports.com',
    address: '123 Main St, Anytown, USA',
    product: 'Team Jersey',
    productType: 'Jersey',
    color: 'Blue',
    neckType: 'Round',
    eventDate: '2023-08-10',
    deliveryDate: '2023-07-25',
    createdAt: '2023-06-30',
    status: 'In Production',
    agent: 'Sarah Agent',
    specialInstructions: 'Team logo needs to be printed on the front. Player names and numbers on the back.',
    sizes: [{
      size: 'S',
      quantity: 5
    }, {
      size: 'M',
      quantity: 8
    }, {
      size: 'L',
      quantity: 7
    }, {
      size: 'XL',
      quantity: 5
    }],
    logo: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Team+Logo',
    history: [{
      date: '2023-06-30 09:15',
      status: 'Order Created',
      user: 'Sarah Agent',
      notes: 'Order created with customer details'
    }, {
      date: '2023-07-02 11:30',
      status: 'Approved',
      user: 'John Manager',
      notes: 'Order approved for production'
    }, {
      date: '2023-07-05 14:45',
      status: 'In Production',
      user: 'Production Team',
      notes: 'Started cutting fabric'
    }]
  };
  const totalQuantity = order.sizes.reduce((sum, size) => sum + size.quantity, 0);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Approved':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'In Production':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Cancelled':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-blue-100 text-blue-800';
      case 'In Production':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <button onClick={() => navigate('/orders')} className="mr-4 p-2 rounded-full hover:bg-gray-200">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{order.id}</h1>
            <p className="text-gray-600">{order.customer}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Invoice
          </button>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button onClick={() => setActiveTab('details')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'details' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Order Details
            </button>
            <button onClick={() => setActiveTab('history')} className={`py-4 px-6 text-sm font-medium ${activeTab === 'history' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Order History
            </button>
          </nav>
        </div>
        {activeTab === 'details' ? <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Customer Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Name
                        </p>
                        <p className="mt-1">{order.customer}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Phone
                        </p>
                        <p className="mt-1">{order.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Email
                        </p>
                        <p className="mt-1">{order.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Address
                        </p>
                        <p className="mt-1">{order.address}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Order Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Product Type
                        </p>
                        <p className="mt-1">{order.productType}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Color
                        </p>
                        <p className="mt-1">{order.color}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Neck Type
                        </p>
                        <p className="mt-1">{order.neckType}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Order Date
                        </p>
                        <p className="mt-1">{order.createdAt}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Event Date
                        </p>
                        <p className="mt-1">{order.eventDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Delivery Date
                        </p>
                        <p className="mt-1">{order.deliveryDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Status
                        </p>
                        <p className="mt-1">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Sizes and Quantities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {order.sizes.map(sizeItem => <div key={sizeItem.size} className="border rounded-md p-3 text-center">
                        <div className="font-medium mb-1">{sizeItem.size}</div>
                        <div className="text-gray-500">
                          {sizeItem.quantity} pcs
                        </div>
                      </div>)}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Total quantity: {totalQuantity} pcs
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Special Instructions
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <p className="text-gray-700">{order.specialInstructions}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Logo</h3>
                <div className="border rounded-md overflow-hidden">
                  <img src={order.logo} alt="Team Logo" className="w-full h-auto" />
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Order Status
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          Order Created
                        </p>
                        <p className="text-sm text-gray-500">June 30, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          Approved
                        </p>
                        <p className="text-sm text-gray-500">July 2, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Package className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          In Production
                        </p>
                        <p className="text-sm text-gray-500">July 5, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <Truck className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">
                          Shipped
                        </p>
                        <p className="text-sm text-gray-400">Pending</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">
                          Delivered
                        </p>
                        <p className="text-sm text-gray-400">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {order.history.map((event, index) => <li key={index}>
                    <div className="relative pb-8">
                      {index !== order.history.length - 1 ? <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span> : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${index === 0 ? 'bg-green-100' : 'bg-blue-100'}`}>
                            {getStatusIcon(event.status)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-900">
                              {event.status}{' '}
                              <span className="font-medium text-gray-500">
                                by {event.user}
                              </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {event.notes}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime={event.date}>{event.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>)}
              </ul>
            </div>
          </div>}
      </div>
    </div>;
};