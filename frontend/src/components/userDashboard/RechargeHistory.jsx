import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setHeaderTitle } from "../../redux/slice/headerSlice";
import { useEffect } from 'react';
const RechargeHistory = () => {
      const dispatch = useDispatch();
        useEffect(() => {
          dispatch(setHeaderTitle("Top Up History"));
          dispatch(setBreadcrumbs([{ label: "Top Up History" }]));
        }, []);
    
  // Sample history data
  const historyData = [
    {
      date: '05-Jul-25',
      paidAmount: 0.0,
      rechargeAmount: 300.0,
      status: 'failed',
    },
    {
      date: '05-Jul-25',
      paidAmount: 0.0,
      rechargeAmount: 300.0,
      status: 'failed',
    },
    {
      date: '28-Jun-25',
      paidAmount: 300.0,
      rechargeAmount: 300.0,
      status: 'success',
    },
  ];

  return (
    <div className="min-h-screen ">

        <Header />
        <div className='p-6 max-w-7xl mx-auto'>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
        Recharge History
      </h2>

      <div className="w-full  space-y-4">
        {historyData.map((item, index) => {
          const isSuccess = item.status === 'success';

          return (
            <div
              key={index}
              className="flex justify-between items-center w-full bg-white rounded-2xl shadow-md px-4 py-3"
            >
              {/* Left - Date */}
              <div className="text-gray-500 text-sm md:text-base font-semibold w-1/3">
                {item.date}
              </div>

              {/* Middle - Paid Amount & Source */}
              <div className="text-center w-1/3">
                <p className="text-blue-600 font-bold text-sm md:text-base">
                  ₹ {item.paidAmount.toFixed(2)}
                </p>
                <p className="text-blue-600 text-xs md:text-sm">App</p>
              </div>

              {/* Right - Recharge Amount & Status */}
              <div className="flex items-center justify-end gap-1 w-1/3">
                <p
                  className={`font-bold text-sm md:text-base ${
                    isSuccess ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  ₹{item.rechargeAmount.toFixed(2)}
                </p>
                {isSuccess && (
                  <ArrowDownCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default RechargeHistory;
