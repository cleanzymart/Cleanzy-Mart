import React from 'react';

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f6] text-[#111813] flex">
      {/* SideNavBar */}
      <aside className="flex h-screen min-h-screen w-64 flex-col border-r border-gray-200/60 bg-white p-4 sticky top-0">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center px-3 py-2">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">CM</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-900 text-base font-bold leading-normal">Cleanzy Mart</h1>
              <p className="text-gray-500 text-sm font-normal leading-normal">Laundry Dashboard</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-2 mt-4">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2bee6c]/20 text-gray-900" href="#">
              <span className="text-xl">📊</span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600" href="#">
              <span className="text-xl">🛒</span>
              <p className="text-sm font-medium leading-normal">Orders</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600" href="#">
              <span className="text-xl">💰</span>
              <p className="text-sm font-medium leading-normal">Pricing Management</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600" href="#">
              <span className="text-xl">👥</span>
              <p className="text-sm font-medium leading-normal">Staff Management</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600" href="#">
              <span className="text-xl">📈</span>
              <p className="text-sm font-medium leading-normal">Analytics Reports</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600" href="#">
              <span className="text-xl">⚙️</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </a>
          </nav>
        </div>
        
        <div className="mt-auto">
          <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2bee6c] text-[#111813] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">Add New Order</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        {/* TopNavBar */}
        <header className="flex items-center justify-end whitespace-nowrap border-b border-solid border-gray-200/60 bg-white px-10 py-3 sticky top-0 z-10">
          <div className="flex flex-1 justify-end gap-4">
            <label className="flex flex-col min-w-40 !h-10 max-w-sm">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-gray-500 flex border-none bg-[#f6f8f6] items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span className="text-xl">🔍</span>
                </div>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 focus:outline-0 focus:ring-2 focus:ring-[#2bee6c]/50 border-none bg-[#f6f8f6] h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" 
                  placeholder="Search orders..." 
                  value=""
                />
              </div>
            </label>
            
            <div className="flex gap-2">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#f6f8f6] text-gray-800">
                <span className="text-xl">🔔</span>
              </button>
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-[#f6f8f6] text-gray-800">
                <span className="text-xl">👤</span>
              </button>
            </div>
          </div>
        </header>

        <div className="p-10">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between gap-3 pb-4">
            <p className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Dashboard
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200/60 bg-white">
              <p className="text-gray-600 text-base font-medium leading-normal">Today's Orders</p>
              <p className="text-gray-900 tracking-light text-3xl font-bold leading-tight">42</p>
              <p className="text-green-600 text-sm font-medium leading-normal">+5.2%</p>
            </div>
            
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200/60 bg-white">
              <p className="text-gray-600 text-base font-medium leading-normal">Weekly Revenue</p>
              <p className="text-gray-900 tracking-light text-3xl font-bold leading-tight">$2,150</p>
              <p className="text-green-600 text-sm font-medium leading-normal">+1.8%</p>
            </div>
            
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200/60 bg-white">
              <p className="text-gray-600 text-base font-medium leading-normal">Pending Tasks</p>
              <p className="text-gray-900 tracking-light text-3xl font-bold leading-tight">8</p>
              <p className="text-orange-500 text-sm font-medium leading-normal">+3 from yesterday</p>
            </div>
          </div>

          {/* Active Orders Table Section */}
          <div className="mt-8">
            <h2 className="text-gray-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
              Active Orders
            </h2>
            
            <div className="bg-white border border-gray-200/60 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3" scope="col">Order ID</th>
                      <th className="px-6 py-3" scope="col">Customer Name</th>
                      <th className="px-6 py-3" scope="col">Service</th>
                      <th className="px-6 py-3" scope="col">Due Date</th>
                      <th className="px-6 py-3" scope="col">Status</th>
                      <th className="px-6 py-3 text-right" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#CM-1023</td>
                      <td className="px-6 py-4">Jane Cooper</td>
                      <td className="px-6 py-4">Wash & Fold</td>
                      <td className="px-6 py-4">2024-07-28</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          In Process
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">👁️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">✏️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">🖨️</button>
                      </td>
                    </tr>
                    
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#CM-1022</td>
                      <td className="px-6 py-4">Robert Fox</td>
                      <td className="px-6 py-4">Dry Cleaning</td>
                      <td className="px-6 py-4">2024-07-27</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Ready for Pickup
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">👁️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">✏️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">🖨️</button>
                      </td>
                    </tr>
                    
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#CM-1021</td>
                      <td className="px-6 py-4">Cody Fisher</td>
                      <td className="px-6 py-4">Wash & Fold</td>
                      <td className="px-6 py-4">2024-07-26</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">👁️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">✏️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">🖨️</button>
                      </td>
                    </tr>
                    
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#CM-1020</td>
                      <td className="px-6 py-4">Kristin Watson</td>
                      <td className="px-6 py-4">Specialty Items</td>
                      <td className="px-6 py-4">2024-07-29</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">👁️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">✏️</button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500">🖨️</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerDashboard;