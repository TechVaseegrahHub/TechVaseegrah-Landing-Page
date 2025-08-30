"use client";
import React, { useState } from "react";
const today = new Date().toISOString().split("T")[0]
import SuccessPopup from "./SuccessPopup";


const DSMLForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "", // B.E CSE, B.Tech IT
    internshipType: "Data Science/ Machine Learning",
    TimePeriod: "",
    fromDate: "",
    toDate: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
  
      // Auto calculate toDate if both fromDate and TimePeriod exist
      if ((name === "fromDate" || name === "TimePeriod") && updated.fromDate && updated.TimePeriod) {
        const weeks = parseInt(updated.TimePeriod); // "2 Weeks" => 2
        const from = new Date(updated.fromDate);
        const to = new Date(from);
        to.setDate(from.getDate() + weeks * 7);
        updated.toDate = to.toISOString().split("T")[0]; // format to yyyy-mm-dd
      }
  
      return updated;
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }); 

    setShowPopup(true);
     setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      internshipType: "Data Science/ Machine Learning",
      TimePeriod: "",
      fromDate: "",
      toDate: "",
    });

  } catch (error) {
    console.error("❌ Submission error:", error);
    alert("Something went wrong!");
  }
};


  return (
    <div className="max-w-[500px] mx-auto my-[50px] p-[30px] bg-[#f9f9f9] border-2 border-[#ccc] rounded-[12px] shadow-md font-['Segoe_UI',sans-serif]">
      {/* <h2 className="text-center text-[28px] font-bold mb-[10px] text-[#222]">
        Data Science/ Machine Learning Internship Registration
      </h2> */}

      <p className="text-center mb-[30px] text-[16px]">
        <span className="font-bold">
          <span>Welcome to </span>
          <span className="text-[#006400]">Tech</span>
          <span className="text-[#9ACD32]">Vaseegrah</span>
        </span>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
        {[
          { name: "name", label: "Full Name *", placeholder: "Enter Your Name" },
          { name: "email", label: "Email *", placeholder: "Enter Your Mail ID" },
          { name: "phone", label: "Phone Number *", placeholder: "Enter Your Mobile Number" },
          { name: "college", label: "College Name *", placeholder: "Enter Your College Name" },
          { name: "department", label: "Department *", placeholder: "Enter Your Department (e.g., B.Tech IT)" },
        
        
        ].map(({ name, label, placeholder }) => (
          <div className="flex flex-col" key={name}>
            <label className="mb-[5px] font-semibold text-[#333]">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className="p-[10px] px-[12px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#007bff] transition-all duration-300"
            />

          </div>
        ))}

    <div className="flex flex-col">
    <label className="mb-[5px] font-semibold text-[#333]">Time Period *</label>
    <select
      name="TimePeriod"
      value={formData.TimePeriod}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, TimePeriod: e.target.value }))
      }
      required
      className="p-[10px] px-[12px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#007bff] transition-all duration-300"
    >
      <option value="" disabled>Select duration</option>
      <option value="1 Weeks">1 Weeks</option>
      <option value="2 Weeks">2 Weeks</option>
      <option value="4 Weeks">4 Weeks</option>
      <option value="6 Weeks">6 Weeks</option>
      <option value="8 Weeks">8 Weeks</option>
    </select>
  </div>
  <div className="flex flex-col">
  <label className="mb-[5px] font-semibold text-[#333]">
    Internship Duration - From Date *
  </label>
  <input
    type="date"
    name="fromDate"
    value={formData.fromDate}
    onChange={handleChange}
    required
    min={today}
    className="p-[10px] px-[12px] border border-[#ccc] rounded-[6px] text-[15px] outline-none focus:border-[#007bff] transition-all duration-300"
  />
</div>

<div className="flex flex-col">
  <label className="mb-[5px] font-semibold text-[#333]">
    Internship Duration - To Date *
  </label>
  <input
  type="date"
  name="toDate"
  value={formData.toDate}
  onChange={handleChange}
  required
  readOnly
  className="..."
/>

</div>
       <button
          type="submit"
          className="bg-green-700 text-white py-[12px] px-4 text-[16px] rounded-[8px]"
        >
          Apply Now
        </button>
      </form>
      <SuccessPopup visible={showPopup} onClose={() => setShowPopup(false)} />

    </div>
  );
};

export default DSMLForm;
