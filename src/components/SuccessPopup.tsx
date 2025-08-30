// components/SuccessPopup.tsx
import React from "react";

const SuccessPopup = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        
        <h1 className="text-black text-2xl  mb-5">Our Admin Will Contact You Soon</h1>
        {/* <h2>Thanks For Applying </h2> */}
        <h3 className="text-green-600 text-xl font-bold mb-4">✅ Form submitted successfully!</h3>
        <button
          onClick={onClose}
           className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
