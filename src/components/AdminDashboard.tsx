/**
 * Simple Admin Dashboard for viewing submissions
 * 
 * This is a basic template. For production, you should:
 * 1. Add authentication (NextAuth.js recommended)
 * 2. Add pagination for large datasets
 * 3. Add filters and search functionality
 * 4. Add export to CSV functionality
 * 
 * To use this page:
 * 1. Create src/app/admin/page.tsx
 * 2. Add authentication middleware
 * 3. Fetch data from your database or Google Sheets API
 */

'use client';

import { useState, useEffect } from 'react';

interface Subscription {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  city: string;
  role: string;
  type: string;
  message?: string;
  timestamp: string;
}

interface EduWarriorApplication {
  id: string;
  name: string;
  email: string;
  mobile: string;
  city: string;
  education: string;
  expertise: string;
  experience?: string;
  motivation: string;
  availability: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'subscriptions' | 'eduwarriors'>('subscriptions');
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [applications, setApplications] = useState<EduWarriorApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch data from your backend
    // For Google Sheets, you'll need to create API endpoints that read from sheets
    // For database, fetch from Supabase/Prisma
    
    // Mock data for demonstration
    setTimeout(() => {
      setSubscriptions([
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          mobile: '+919876543210',
          city: 'Mumbai',
          role: 'parent',
          type: 'subscribe',
          timestamp: new Date().toISOString(),
        },
      ]);
      
      setApplications([
        {
          id: '1',
          name: 'Jane Smith',
          email: 'jane@example.com',
          mobile: '+919876543211',
          city: 'Delhi',
          education: 'graduate',
          expertise: 'education',
          experience: '2 years teaching',
          motivation: 'Want to make a difference',
          availability: 'immediately',
          timestamp: new Date().toISOString(),
        },
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => 
          JSON.stringify(row[header as keyof typeof row] || '')
        ).join(',')
      ),
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a5f] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage subscriptions and EduWarrior applications</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('subscriptions')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'subscriptions'
                    ? 'border-b-2 border-[#1e3a5f] text-[#1e3a5f]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Subscriptions ({subscriptions.length})
              </button>
              <button
                onClick={() => setActiveTab('eduwarriors')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'eduwarriors'
                    ? 'border-b-2 border-[#1e3a5f] text-[#1e3a5f]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EduWarrior Applications ({applications.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Subscriptions Tab */}
        {activeTab === 'subscriptions' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Newsletter Subscriptions</h2>
              <button
                onClick={() => exportToCSV(subscriptions, 'subscriptions.csv')}
                className="px-4 py-2 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2a4a73] transition"
              >
                Export CSV
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subscriptions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sub.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.mobile || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sub.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          sub.type === 'webinar' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {sub.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* EduWarrior Applications Tab */}
        {activeTab === 'eduwarriors' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">EduWarrior Applications</h2>
              <button
                onClick={() => exportToCSV(applications, 'eduwarrior-applications.csv')}
                className="px-4 py-2 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2a4a73] transition"
              >
                Export CSV
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expertise</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.mobile}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.education}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.expertise}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.availability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(app.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
