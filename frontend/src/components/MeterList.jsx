import React, { useState } from "react";
import MeterProfileModal from "../modal/MeterProfileModal";
import MeterCard from "../components/MeterCard";
import {
 
  Zap,
  
} from "lucide-react";

const MeterList = ({ meters }) => {
  const [selectedMeter, setSelectedMeter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (meter) => {
    setSelectedMeter(meter);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMeter(null);
    setIsModalOpen(false);
  };

  return (
    // <div className="p-4 sm:p-6 bg-white min-h-screen">

    
    //   <div className="max-w-7xl mx-auto">
    //     {/* <h1 className="text-lg bg-blue-100 text-blue-700 px-2 py-2 rounded-full font-medium mb-2 sticky">Meters Overview</h1> */}
    //                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 bg-white px-4 rounded-t-md">
    //     <div className="flex items-center space-x-3">
    //       <div className="p-2 bg-orange-100 rounded-sm">
    //         <Zap className="text-orange-600" size={20} />
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold text-gray-800">Meters Overview</h3>
    //         <p className="text-sm text-gray-500">{meters.length} meters</p>
    //       </div>
    //     </div>
    //     {/* <button
    //       // onClick={() => setAlerts([])}
    //       className="text-sm text-blue-600 hover:text-blue-800"
    //     >
    //       Clear All
    //     </button> */}
    //   </div>

    //     {/* One meter per row */}
    //     <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
    //       {meters.map((meter, ind) => (
    //         <div key={meter._id + ind} className="w-full">
    //           <MeterCard meter={meter} onClick={openModal} />
    //         </div>
    //       ))}
    //     </div>

    //     {/* Modal for meter profile */}
    //     <MeterProfileModal
    //       meter={selectedMeter}
    //       isOpen={isModalOpen}
    //       onClose={closeModal}
    //     />
    //   </div>
    // </div>

    <div className="p-4 sm:p-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 bg-white px-4 rounded-t-md">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-orange-100 rounded-sm">
          <Zap className="text-orange-600" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Meters Overview</h3>
          <p className="text-sm text-gray-500">{meters.length} meters</p>
        </div>
      </div>
    </div> */}

    {/* Scrollable Meter List Section */}
     {/* <div className="max-h-[400px] overflow-y-auto space-y-3 pr-2"> */}
    <div className="  space-y-3 pr-2">
      {meters.map((meter, ind) => (
        <div key={meter._id + ind} className="w-full">
          <MeterCard meter={meter} onClick={openModal} />
        </div>
      ))}
    </div>

    {/* Meter Modal */}
    <MeterProfileModal
      meter={selectedMeter}
      isOpen={isModalOpen}
      onClose={closeModal}
    />
  </div>
</div>

  );
};

export default MeterList;