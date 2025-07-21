import React, { useState } from 'react';
import { Eye, ArrowLeft, Zap, Calendar, Activity, Filter } from 'lucide-react';

const AdminDashboardUserData = () => {
  const [currentView, setCurrentView] = useState('main');
  const [selectedUser, setSelectedUser] = useState(null);
  const [dateFilter, setDateFilter] = useState('7days');

  // Sample data based on your structure - with more daily data for filtering
  const adminData = [
    {
      adminId: "64af3c123...",
      users: [
        {
          userId: "64af4d121...",
          userName: "John Doe",
          address: "123 Main Street, Ground Floor",
          meters: [
            {
              meterId: "64af567...",
              meterName: "Ground Floor Meter",
              meterType: "Smart Power Meter",
              dailyData: [
                {
                  date: "2025-07-18T00:00:00.000Z",
                  totalKWh: "100",
                  totalDeduction: "5",
                  totalEG: "90",
                  totalDG: "10"
                },
                {
                  date: "2025-07-17T00:00:00.000Z",
                  totalKWh: "95",
                  totalDeduction: "4",
                  totalEG: "85",
                  totalDG: "10"
                },
                {
                  date: "2025-07-16T00:00:00.000Z",
                  totalKWh: "102",
                  totalDeduction: "6",
                  totalEG: "88",
                  totalDG: "14"
                },
                {
                  date: "2025-07-15T00:00:00.000Z",
                  totalKWh: "98",
                  totalDeduction: "3",
                  totalEG: "90",
                  totalDG: "8"
                },
                {
                  date: "2025-07-10T00:00:00.000Z",
                  totalKWh: "110",
                  totalDeduction: "7",
                  totalEG: "95",
                  totalDG: "15"
                },
                {
                  date: "2025-07-01T00:00:00.000Z",
                  totalKWh: "105",
                  totalDeduction: "5",
                  totalEG: "92",
                  totalDG: "13"
                },
                {
                  date: "2025-06-15T00:00:00.000Z",
                  totalKWh: "89",
                  totalDeduction: "4",
                  totalEG: "80",
                  totalDG: "9"
                },
                {
                  date: "2025-05-20T00:00:00.000Z",
                  totalKWh: "115",
                  totalDeduction: "8",
                  totalEG: "100",
                  totalDG: "15"
                },
                {
                  date: "2025-04-10T00:00:00.000Z",
                  totalKWh: "92",
                  totalDeduction: "3",
                  totalEG: "85",
                  totalDG: "7"
                },
                {
                  date: "2025-03-05T00:00:00.000Z",
                  totalKWh: "87",
                  totalDeduction: "2",
                  totalEG: "80",
                  totalDG: "7"
                },
                {
                  date: "2025-02-12T00:00:00.000Z",
                  totalKWh: "78",
                  totalDeduction: "3",
                  totalEG: "70",
                  totalDG: "8"
                },
                {
                  date: "2025-01-25T00:00:00.000Z",
                  totalKWh: "85",
                  totalDeduction: "4",
                  totalEG: "75",
                  totalDG: "10"
                },
                {
                  date: "2024-12-18T00:00:00.000Z",
                  totalKWh: "95",
                  totalDeduction: "5",
                  totalEG: "85",
                  totalDG: "10"
                },
                {
                  date: "2024-11-22T00:00:00.000Z",
                  totalKWh: "88",
                  totalDeduction: "3",
                  totalEG: "80",
                  totalDG: "8"
                },
                {
                  date: "2024-10-15T00:00:00.000Z",
                  totalKWh: "92",
                  totalDeduction: "6",
                  totalEG: "82",
                  totalDG: "10"
                },
                {
                  date: "2024-09-10T00:00:00.000Z",
                  totalKWh: "101",
                  totalDeduction: "7",
                  totalEG: "88",
                  totalDG: "13"
                },
                {
                  date: "2024-08-05T00:00:00.000Z",
                  totalKWh: "97",
                  totalDeduction: "4",
                  totalEG: "87",
                  totalDG: "10"
                },
                {
                  date: "2024-07-20T00:00:00.000Z",
                  totalKWh: "103",
                  totalDeduction: "5",
                  totalEG: "90",
                  totalDG: "13"
                }
              ]
            }
          ]
        },
        {
          userId: "64af4d122...",
          userName: "Jane Smith",
          address: "456 Oak Avenue, First Floor",
          meters: [
            {
              meterId: "64af568...",
              meterName: "First Floor Meter",
              meterType: "Smart Power Meter",
              dailyData: [
                {
                  date: "2025-07-18T00:00:00.000Z",
                  totalKWh: "85",
                  totalDeduction: "3",
                  totalEG: "75",
                  totalDG: "10"
                },
                {
                  date: "2025-07-17T00:00:00.000Z",
                  totalKWh: "82",
                  totalDeduction: "2",
                  totalEG: "73",
                  totalDG: "9"
                },
                {
                  date: "2025-07-16T00:00:00.000Z",
                  totalKWh: "88",
                  totalDeduction: "4",
                  totalEG: "78",
                  totalDG: "10"
                },
                {
                  date: "2025-06-20T00:00:00.000Z",
                  totalKWh: "79",
                  totalDeduction: "3",
                  totalEG: "70",
                  totalDG: "9"
                },
                {
                  date: "2025-05-15T00:00:00.000Z",
                  totalKWh: "91",
                  totalDeduction: "5",
                  totalEG: "80",
                  totalDG: "11"
                },
                {
                  date: "2024-12-10T00:00:00.000Z",
                  totalKWh: "73",
                  totalDeduction: "2",
                  totalEG: "66",
                  totalDG: "7"
                },
                {
                  date: "2024-08-25T00:00:00.000Z",
                  totalKWh: "86",
                  totalDeduction: "4",
                  totalEG: "76",
                  totalDG: "10"
                }
              ]
            }
          ]
        },
        {
          userId: "64af4d123...",
          userName: "Mike Johnson",
          address: "789 Pine Road, Second Floor",
          meters: [
            {
              meterId: "64af569...",
              meterName: "Second Floor Meter",
              meterType: "Smart Power Meter",
              dailyData: [
                {
                  date: "2025-07-18T00:00:00.000Z",
                  totalKWh: "120",
                  totalDeduction: "8",
                  totalEG: "105",
                  totalDG: "15"
                },
                {
                  date: "2025-07-17T00:00:00.000Z",
                  totalKWh: "115",
                  totalDeduction: "7",
                  totalEG: "100",
                  totalDG: "15"
                },
                {
                  date: "2025-07-16T00:00:00.000Z",
                  totalKWh: "122",
                  totalDeduction: "9",
                  totalEG: "108",
                  totalDG: "14"
                },
                {
                  date: "2025-06-25T00:00:00.000Z",
                  totalKWh: "110",
                  totalDeduction: "6",
                  totalEG: "95",
                  totalDG: "15"
                },
                {
                  date: "2025-04-30T00:00:00.000Z",
                  totalKWh: "128",
                  totalDeduction: "10",
                  totalEG: "110",
                  totalDG: "18"
                },
                {
                  date: "2024-11-15T00:00:00.000Z",
                  totalKWh: "105",
                  totalDeduction: "5",
                  totalEG: "92",
                  totalDG: "13"
                },
                {
                  date: "2024-09-05T00:00:00.000Z",
                  totalKWh: "118",
                  totalDeduction: "8",
                  totalEG: "102",
                  totalDG: "16"
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setCurrentView('userDetails');
  };

  const handleBackToAdmin = () => {
    setCurrentView('main');
    setSelectedUser(null);
    setDateFilter('7days');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filterDataByDate = (dailyData) => {
    const currentDate = new Date();
    const filteredData = dailyData.filter(data => {
      const dataDate = new Date(data.date);
      const timeDiff = currentDate.getTime() - dataDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      switch (dateFilter) {
        case '7days':
          return daysDiff <= 7;
        case '30days':
          return daysDiff <= 30;
        case '3months':
          return daysDiff <= 90;
        case '6months':
          return daysDiff <= 180;
        case '1year':
          return daysDiff <= 365;
        default:
          return true;
      }
    });
    
    return filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const getFilterLabel = () => {
    switch (dateFilter) {
      case '7days':
        return 'Last 7 Days';
      case '30days':
        return 'Last 30 Days';
      case '3months':
        return 'Last 3 Months';
      case '6months':
        return 'Last 6 Months';
      case '1year':
        return 'Last 1 Year';
      default:
        return 'All Time';
    }
  };

  // Main Admin View
  if (currentView === 'main') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage users and their meter data</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Users List</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Meters
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {adminData[0].users.map((user, index) => (
                    <tr key={user.userId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">
                              {user.userName.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.userName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.userId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {user.meters.length} meter{user.meters.length > 1 ? 's' : ''}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleViewUser(user)}
                          className="text-blue-600 hover:text-blue-900 inline-flex items-center"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User Details View
  if (currentView === 'userDetails' && selectedUser) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <button
              onClick={handleBackToAdmin}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin Dashboard
            </button>
            <h1 className="text-3xl font-bold text-gray-900">{selectedUser.userName}</h1>
            <p className="text-gray-600 mt-2">User Details & Meter Information</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* User Info Card */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">User Information</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">User Name</label>
                  <p className="mt-1 text-lg text-gray-900">{selectedUser.userName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">User ID</label>
                  <p className="mt-1 text-lg text-gray-900">{selectedUser.userId}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <p className="mt-1 text-lg text-gray-900">{selectedUser.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Meters Information */}
          {selectedUser.meters.map((meter, meterIndex) => (
            <div key={meter.meterId} className="bg-white rounded-lg shadow mb-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                  {meter.meterName}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{meter.meterType}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Meter ID</label>
                  <p className="mt-1 text-gray-900">{meter.meterId}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-500" />
                    Daily Data
                  </h3>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 flex items-center">
                      <Filter className="h-4 w-4 mr-1" />
                      Filter:
                    </span>
                    <select
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="7days">Last 7 Days</option>
                      <option value="30days">Last 30 Days</option>
                      <option value="3months">Last 3 Months</option>
                      <option value="6months">Last 6 Months</option>
                      <option value="1year">Last 1 Year</option>
                    </select>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  {filterDataByDate(meter.dailyData).length > 0 ? (
                    <table className="w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            <Calendar className="h-4 w-4 inline mr-1" />
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Total KWh
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Total Deduction
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Total EG
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Total DG
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filterDataByDate(meter.dailyData).map((data, dataIndex) => (
                          <tr key={dataIndex} className="hover:bg-gray-50">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {formatDate(data.date)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {data.totalKWh} kWh
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                {data.totalDeduction} kWh
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {data.totalEG} kWh
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                {data.totalDG} kWh
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">No data available for {getFilterLabel()}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default AdminDashboardUserData;