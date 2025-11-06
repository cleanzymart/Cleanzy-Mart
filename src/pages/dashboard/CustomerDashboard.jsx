import React from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f6f8f6] text-[#111813]">
      {/* TopNavBar */}
      <header className="w-full bg-white border-b border-solid border-gray-200/80 sticky top-0 z-50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4 text-[#111813]">
            {/* Logo SVG */}
            <div className="w-6 h-6 text-[#2bee6c]">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"></path>
                <path clipRule="evenodd" fillRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"></path>
              </svg>
            </div>
            <h2 className="text-[#111813] text-lg font-bold leading-tight tracking-[-0.015em]">Cleanzy Mart</h2>
          </div>
          
          <div className="flex flex-1 items-center justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <a className="text-[#111813] hover:text-[#2bee6c] text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-[#111813] hover:text-[#2bee6c] text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-[#111813] hover:text-[#2bee6c] text-sm font-medium leading-normal" href="#">Support</a>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2bee6c] text-[#111813] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                <span className="truncate">Book New Service</span>
              </button>
              
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 text-[#111813] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 transition-colors">
                <span className="text-xl">🔔</span>
              </button>
            </div>
            
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="layout-content-container flex flex-col max-w-7xl mx-auto flex-1 gap-8">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3">
            <p className="text-[#111813] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Hello, Jane Doe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Active Orders & History */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Active Orders Section */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[#111813] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1">
                  Your Active Order
                </h2>
                
                <div className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white p-4">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Order Image */}
                    <div className="w-full lg:w-1/3 bg-center bg-no-repeat aspect-video lg:aspect-square bg-cover rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Laundry Image</span>
                    </div>
                    
                    {/* Order Details */}
                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 py-2">
                      <div>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Order ID: CZM-12345
                        </p>
                        <p className="text-[#111813] text-lg font-bold leading-tight tracking-[-0.015em]">
                          Wash & Fold, Dry Cleaning
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-500 text-base font-normal leading-normal">
                          Scheduled Pickup: Today, 4:00 PM - 6:00 PM
                        </p>
                        <p className="text-gray-500 text-base font-normal leading-normal">
                          Delivery Est: Tomorrow, 5:00 PM - 7:00 PM
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="flex flex-col gap-4 pt-2">
                        <div className="flex gap-1.5 items-center justify-between text-xs font-medium text-gray-500">
                          <div className="flex flex-col items-center text-center text-[#2bee6c] w-16">
                            <span className="mb-1">📅</span>
                            Scheduled
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200"></div>
                          <div className="flex flex-col items-center text-center text-[#2bee6c] w-16">
                            <span className="mb-1">🚚</span>
                            Picked Up
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200"></div>
                          <div className="flex flex-col items-center text-center text-[#111813] w-16">
                            <span className="mb-1 text-[#2bee6c]">🧺</span>
                            In Process
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200"></div>
                          <div className="flex flex-col items-center text-center w-16">
                            <span className="mb-1">✅</span>
                            Ready
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200"></div>
                          <div className="flex flex-col items-center text-center w-16">
                            <span className="mb-1">🏠</span>
                            Delivered
                          </div>
                        </div>
                        
                        <div className="rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-[#2bee6c]" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order History Section */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[#111813] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1">
                  Order History
                </h2>
                
                <div className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3" scope="col">Date</th>
                          <th className="px-6 py-3" scope="col">Order ID</th>
                          <th className="px-6 py-3" scope="col">Service</th>
                          <th className="px-6 py-3 text-right" scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900">Oct 28, 2023</td>
                          <td className="px-6 py-4 text-gray-500">CZM-12321</td>
                          <td className="px-6 py-4 text-gray-900">Wash & Fold</td>
                          <td className="px-6 py-4 text-gray-900 text-right">$35.50</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900">Oct 15, 2023</td>
                          <td className="px-6 py-4 text-gray-500">CZM-12289</td>
                          <td className="px-6 py-4 text-gray-900">Dry Cleaning</td>
                          <td className="px-6 py-4 text-gray-900 text-right">$52.00</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900">Sep 30, 2023</td>
                          <td className="px-6 py-4 text-gray-500">CZM-12250</td>
                          <td className="px-6 py-4 text-gray-900">Wash & Fold</td>
                          <td className="px-6 py-4 text-gray-900 text-right">$29.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="px-6 py-3 text-center">
                    <a className="text-sm font-medium text-[#2bee6c] hover:underline" href="#">
                      View all history
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <h2 className="text-[#111813] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1">
                Quick Actions
              </h2>
              
              <div className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white p-6 flex flex-col gap-4">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-[#2bee6c] text-[#111813] text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                  <span className="text-xl">🛒</span>
                  <span>Book New Service</span>
                </button>
                
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-gray-100 text-[#111813] text-base font-medium leading-normal hover:bg-gray-200 transition-colors">
                  <span className="text-xl">👤</span>
                  <span>Manage Profile</span>
                </button>
                
                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-gray-100 text-[#111813] text-base font-medium leading-normal hover:bg-gray-200 transition-colors">
                  <span className="text-xl">🧾</span>
                  <span>View Invoices</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;