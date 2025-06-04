import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { Inventory } from './pages/Inventory';
import { Customers } from './pages/Customers';
import { Agents } from './pages/Agents';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { CreateOrder } from './pages/CreateOrder';
import { OrderDetail } from './pages/OrderDetail';
import { AddStock } from './pages/AddStock';
import { AddAgent } from './pages/AddAgent';
import { Layout } from './components/shared/Layout';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
export function App() {
  return <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute>
                <Layout />
              </ProtectedRoute>}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/new" element={<CreateOrder />} />
            <Route path="orders/:id" element={<OrderDetail />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="inventory/add" element={<AddStock />} />
            <Route path="customers" element={<Customers />} />
            <Route path="agents" element={<Agents />} />
            <Route path="agents/add" element={<AddAgent />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>;
}