import React from "react";
import { useState } from "react";
import Nav from '@/Components/Nav'
import MobileNav from '@/Components/MobileNav'
import Link from "next/link";

const AdminDashboard = () => {

    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex items-center justify-center">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg">
        
        {/* Header */}
        <header className="p-6 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
          <Link href="Book"><button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg">
            Reserve
          </button></Link>
        </header>
        
        {/* Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  Hall Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  User Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  Subject Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  Date Of Booking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  Start - End (Time)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  No Of Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b border-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">FF01</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Dr. David A. Williams</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">Machine Learning</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">2024-07-16</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">10.00 - 12.00</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">100</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex justify-between space-x-2">
                    <button className="bg-gray-700 text-white font-semibold py-1 px-3 rounded-lg">
                      View
                    </button>
                    <button className="bg-blue-500 text-white font-semibold py-1 px-3 rounded-lg">
                      Edit
                    </button>
                    <button className="bg-green-500 text-white font-semibold py-1 px-3 rounded-lg">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white font-semibold py-1 px-3 rounded-lg">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
              {/* Additional rows can be added similarly */}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className="text-gray-600">&copy; Copyright 2024, All Rights Reserved by Lecspace</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;
